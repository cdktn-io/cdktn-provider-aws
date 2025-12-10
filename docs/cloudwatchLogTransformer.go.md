# `cloudwatchLogTransformer` Submodule <a name="`cloudwatchLogTransformer` Submodule" id="@cdktf/provider-aws.cloudwatchLogTransformer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogTransformer <a name="CloudwatchLogTransformer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer aws_cloudwatch_log_transformer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformer(scope Construct, id *string, config CloudwatchLogTransformerConfig) CloudwatchLogTransformer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig">CloudwatchLogTransformerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig">CloudwatchLogTransformerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.putTransformerConfig">PutTransformerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.resetTransformerConfig">ResetTransformerConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTransformerConfig` <a name="PutTransformerConfig" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.putTransformerConfig"></a>

```go
func PutTransformerConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.putTransformerConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTransformerConfig` <a name="ResetTransformerConfig" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.resetTransformerConfig"></a>

```go
func ResetTransformerConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudwatchLogTransformer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.CloudwatchLogTransformer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.CloudwatchLogTransformer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.CloudwatchLogTransformer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.CloudwatchLogTransformer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudwatchLogTransformer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudwatchLogTransformer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudwatchLogTransformer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudwatchLogTransformer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.transformerConfig">TransformerConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList">CloudwatchLogTransformerTransformerConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.logGroupArnInput">LogGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.transformerConfigInput">TransformerConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TransformerConfig`<sup>Required</sup> <a name="TransformerConfig" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.transformerConfig"></a>

```go
func TransformerConfig() CloudwatchLogTransformerTransformerConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList">CloudwatchLogTransformerTransformerConfigList</a>

---

##### `LogGroupArnInput`<sup>Optional</sup> <a name="LogGroupArnInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.logGroupArnInput"></a>

```go
func LogGroupArnInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TransformerConfigInput`<sup>Optional</sup> <a name="TransformerConfigInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.transformerConfigInput"></a>

```go
func TransformerConfigInput() interface{}
```

- *Type:* interface{}

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.logGroupArn"></a>

```go
func LogGroupArn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogTransformerConfig <a name="CloudwatchLogTransformerConfig" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LogGroupArn: *string,
	Region: *string,
	TransformerConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#log_group_arn CloudwatchLogTransformer#log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig.property.transformerConfig">TransformerConfig</a></code> | <code>interface{}</code> | transformer_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig.property.logGroupArn"></a>

```go
LogGroupArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#log_group_arn CloudwatchLogTransformer#log_group_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#region CloudwatchLogTransformer#region}

---

##### `TransformerConfig`<sup>Optional</sup> <a name="TransformerConfig" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerConfig.property.transformerConfig"></a>

```go
TransformerConfig interface{}
```

- *Type:* interface{}

transformer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#transformer_config CloudwatchLogTransformer#transformer_config}

---

### CloudwatchLogTransformerTransformerConfig <a name="CloudwatchLogTransformerTransformerConfig" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfig {
	AddKeys: interface{},
	CopyValue: interface{},
	Csv: interface{},
	DateTimeConverter: interface{},
	DeleteKeys: interface{},
	Grok: interface{},
	ListToMap: interface{},
	LowerCaseString: interface{},
	MoveKeys: interface{},
	ParseCloudfront: interface{},
	ParseJson: interface{},
	ParseKeyValue: interface{},
	ParsePostgres: interface{},
	ParseRoute53: interface{},
	ParseToOcsf: interface{},
	ParseVpc: interface{},
	ParseWaf: interface{},
	RenameKeys: interface{},
	SplitString: interface{},
	SubstituteString: interface{},
	TrimString: interface{},
	TypeConverter: interface{},
	UpperCaseString: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.addKeys">AddKeys</a></code> | <code>interface{}</code> | add_keys block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.copyValue">CopyValue</a></code> | <code>interface{}</code> | copy_value block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.csv">Csv</a></code> | <code>interface{}</code> | csv block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.dateTimeConverter">DateTimeConverter</a></code> | <code>interface{}</code> | date_time_converter block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.deleteKeys">DeleteKeys</a></code> | <code>interface{}</code> | delete_keys block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.grok">Grok</a></code> | <code>interface{}</code> | grok block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.listToMap">ListToMap</a></code> | <code>interface{}</code> | list_to_map block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.lowerCaseString">LowerCaseString</a></code> | <code>interface{}</code> | lower_case_string block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.moveKeys">MoveKeys</a></code> | <code>interface{}</code> | move_keys block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.parseCloudfront">ParseCloudfront</a></code> | <code>interface{}</code> | parse_cloudfront block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.parseJson">ParseJson</a></code> | <code>interface{}</code> | parse_json block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.parseKeyValue">ParseKeyValue</a></code> | <code>interface{}</code> | parse_key_value block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.parsePostgres">ParsePostgres</a></code> | <code>interface{}</code> | parse_postgres block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.parseRoute53">ParseRoute53</a></code> | <code>interface{}</code> | parse_route53 block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.parseToOcsf">ParseToOcsf</a></code> | <code>interface{}</code> | parse_to_ocsf block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.parseVpc">ParseVpc</a></code> | <code>interface{}</code> | parse_vpc block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.parseWaf">ParseWaf</a></code> | <code>interface{}</code> | parse_waf block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.renameKeys">RenameKeys</a></code> | <code>interface{}</code> | rename_keys block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.splitString">SplitString</a></code> | <code>interface{}</code> | split_string block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.substituteString">SubstituteString</a></code> | <code>interface{}</code> | substitute_string block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.trimString">TrimString</a></code> | <code>interface{}</code> | trim_string block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.typeConverter">TypeConverter</a></code> | <code>interface{}</code> | type_converter block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.upperCaseString">UpperCaseString</a></code> | <code>interface{}</code> | upper_case_string block. |

---

##### `AddKeys`<sup>Optional</sup> <a name="AddKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.addKeys"></a>

```go
AddKeys interface{}
```

- *Type:* interface{}

add_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#add_keys CloudwatchLogTransformer#add_keys}

---

##### `CopyValue`<sup>Optional</sup> <a name="CopyValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.copyValue"></a>

```go
CopyValue interface{}
```

- *Type:* interface{}

copy_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#copy_value CloudwatchLogTransformer#copy_value}

---

##### `Csv`<sup>Optional</sup> <a name="Csv" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.csv"></a>

```go
Csv interface{}
```

- *Type:* interface{}

csv block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#csv CloudwatchLogTransformer#csv}

---

##### `DateTimeConverter`<sup>Optional</sup> <a name="DateTimeConverter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.dateTimeConverter"></a>

```go
DateTimeConverter interface{}
```

- *Type:* interface{}

date_time_converter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#date_time_converter CloudwatchLogTransformer#date_time_converter}

---

##### `DeleteKeys`<sup>Optional</sup> <a name="DeleteKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.deleteKeys"></a>

```go
DeleteKeys interface{}
```

- *Type:* interface{}

delete_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#delete_keys CloudwatchLogTransformer#delete_keys}

---

##### `Grok`<sup>Optional</sup> <a name="Grok" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.grok"></a>

```go
Grok interface{}
```

- *Type:* interface{}

grok block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#grok CloudwatchLogTransformer#grok}

---

##### `ListToMap`<sup>Optional</sup> <a name="ListToMap" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.listToMap"></a>

```go
ListToMap interface{}
```

- *Type:* interface{}

list_to_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#list_to_map CloudwatchLogTransformer#list_to_map}

---

##### `LowerCaseString`<sup>Optional</sup> <a name="LowerCaseString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.lowerCaseString"></a>

```go
LowerCaseString interface{}
```

- *Type:* interface{}

lower_case_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#lower_case_string CloudwatchLogTransformer#lower_case_string}

---

##### `MoveKeys`<sup>Optional</sup> <a name="MoveKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.moveKeys"></a>

```go
MoveKeys interface{}
```

- *Type:* interface{}

move_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#move_keys CloudwatchLogTransformer#move_keys}

---

##### `ParseCloudfront`<sup>Optional</sup> <a name="ParseCloudfront" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.parseCloudfront"></a>

```go
ParseCloudfront interface{}
```

- *Type:* interface{}

parse_cloudfront block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#parse_cloudfront CloudwatchLogTransformer#parse_cloudfront}

---

##### `ParseJson`<sup>Optional</sup> <a name="ParseJson" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.parseJson"></a>

```go
ParseJson interface{}
```

- *Type:* interface{}

parse_json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#parse_json CloudwatchLogTransformer#parse_json}

---

##### `ParseKeyValue`<sup>Optional</sup> <a name="ParseKeyValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.parseKeyValue"></a>

```go
ParseKeyValue interface{}
```

- *Type:* interface{}

parse_key_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#parse_key_value CloudwatchLogTransformer#parse_key_value}

---

##### `ParsePostgres`<sup>Optional</sup> <a name="ParsePostgres" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.parsePostgres"></a>

```go
ParsePostgres interface{}
```

- *Type:* interface{}

parse_postgres block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#parse_postgres CloudwatchLogTransformer#parse_postgres}

---

##### `ParseRoute53`<sup>Optional</sup> <a name="ParseRoute53" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.parseRoute53"></a>

```go
ParseRoute53 interface{}
```

- *Type:* interface{}

parse_route53 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#parse_route53 CloudwatchLogTransformer#parse_route53}

---

##### `ParseToOcsf`<sup>Optional</sup> <a name="ParseToOcsf" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.parseToOcsf"></a>

```go
ParseToOcsf interface{}
```

- *Type:* interface{}

parse_to_ocsf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#parse_to_ocsf CloudwatchLogTransformer#parse_to_ocsf}

---

##### `ParseVpc`<sup>Optional</sup> <a name="ParseVpc" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.parseVpc"></a>

```go
ParseVpc interface{}
```

- *Type:* interface{}

parse_vpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#parse_vpc CloudwatchLogTransformer#parse_vpc}

---

##### `ParseWaf`<sup>Optional</sup> <a name="ParseWaf" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.parseWaf"></a>

```go
ParseWaf interface{}
```

- *Type:* interface{}

parse_waf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#parse_waf CloudwatchLogTransformer#parse_waf}

---

##### `RenameKeys`<sup>Optional</sup> <a name="RenameKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.renameKeys"></a>

```go
RenameKeys interface{}
```

- *Type:* interface{}

rename_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#rename_keys CloudwatchLogTransformer#rename_keys}

---

##### `SplitString`<sup>Optional</sup> <a name="SplitString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.splitString"></a>

```go
SplitString interface{}
```

- *Type:* interface{}

split_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#split_string CloudwatchLogTransformer#split_string}

---

##### `SubstituteString`<sup>Optional</sup> <a name="SubstituteString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.substituteString"></a>

```go
SubstituteString interface{}
```

- *Type:* interface{}

substitute_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#substitute_string CloudwatchLogTransformer#substitute_string}

---

##### `TrimString`<sup>Optional</sup> <a name="TrimString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.trimString"></a>

```go
TrimString interface{}
```

- *Type:* interface{}

trim_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#trim_string CloudwatchLogTransformer#trim_string}

---

##### `TypeConverter`<sup>Optional</sup> <a name="TypeConverter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.typeConverter"></a>

```go
TypeConverter interface{}
```

- *Type:* interface{}

type_converter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#type_converter CloudwatchLogTransformer#type_converter}

---

##### `UpperCaseString`<sup>Optional</sup> <a name="UpperCaseString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfig.property.upperCaseString"></a>

```go
UpperCaseString interface{}
```

- *Type:* interface{}

upper_case_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#upper_case_string CloudwatchLogTransformer#upper_case_string}

---

### CloudwatchLogTransformerTransformerConfigAddKeys <a name="CloudwatchLogTransformerTransformerConfigAddKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigAddKeys {
	Entry: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeys.property.entry">Entry</a></code> | <code>interface{}</code> | entry block. |

---

##### `Entry`<sup>Optional</sup> <a name="Entry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeys.property.entry"></a>

```go
Entry interface{}
```

- *Type:* interface{}

entry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#entry CloudwatchLogTransformer#entry}

---

### CloudwatchLogTransformerTransformerConfigAddKeysEntry <a name="CloudwatchLogTransformerTransformerConfigAddKeysEntry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntry {
	Key: *string,
	Value: *string,
	OverwriteIfExists: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntry.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#key CloudwatchLogTransformer#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntry.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#value CloudwatchLogTransformer#value}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntry.property.overwriteIfExists">OverwriteIfExists</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#overwrite_if_exists CloudwatchLogTransformer#overwrite_if_exists}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntry.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#key CloudwatchLogTransformer#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntry.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#value CloudwatchLogTransformer#value}.

---

##### `OverwriteIfExists`<sup>Optional</sup> <a name="OverwriteIfExists" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntry.property.overwriteIfExists"></a>

```go
OverwriteIfExists interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#overwrite_if_exists CloudwatchLogTransformer#overwrite_if_exists}.

---

### CloudwatchLogTransformerTransformerConfigCopyValue <a name="CloudwatchLogTransformerTransformerConfigCopyValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigCopyValue {
	Entry: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValue.property.entry">Entry</a></code> | <code>interface{}</code> | entry block. |

---

##### `Entry`<sup>Optional</sup> <a name="Entry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValue.property.entry"></a>

```go
Entry interface{}
```

- *Type:* interface{}

entry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#entry CloudwatchLogTransformer#entry}

---

### CloudwatchLogTransformerTransformerConfigCopyValueEntry <a name="CloudwatchLogTransformerTransformerConfigCopyValueEntry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntry {
	Source: *string,
	Target: *string,
	OverwriteIfExists: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntry.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntry.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#target CloudwatchLogTransformer#target}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntry.property.overwriteIfExists">OverwriteIfExists</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#overwrite_if_exists CloudwatchLogTransformer#overwrite_if_exists}. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntry.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}.

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntry.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#target CloudwatchLogTransformer#target}.

---

##### `OverwriteIfExists`<sup>Optional</sup> <a name="OverwriteIfExists" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntry.property.overwriteIfExists"></a>

```go
OverwriteIfExists interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#overwrite_if_exists CloudwatchLogTransformer#overwrite_if_exists}.

---

### CloudwatchLogTransformerTransformerConfigCsv <a name="CloudwatchLogTransformerTransformerConfigCsv" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsv.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigCsv {
	Columns: *[]*string,
	Delimiter: *string,
	QuoteCharacter: *string,
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsv.property.columns">Columns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#columns CloudwatchLogTransformer#columns}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsv.property.delimiter">Delimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#delimiter CloudwatchLogTransformer#delimiter}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsv.property.quoteCharacter">QuoteCharacter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#quote_character CloudwatchLogTransformer#quote_character}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsv.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}. |

---

##### `Columns`<sup>Optional</sup> <a name="Columns" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsv.property.columns"></a>

```go
Columns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#columns CloudwatchLogTransformer#columns}.

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsv.property.delimiter"></a>

```go
Delimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#delimiter CloudwatchLogTransformer#delimiter}.

---

##### `QuoteCharacter`<sup>Optional</sup> <a name="QuoteCharacter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsv.property.quoteCharacter"></a>

```go
QuoteCharacter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#quote_character CloudwatchLogTransformer#quote_character}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsv.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}.

---

### CloudwatchLogTransformerTransformerConfigDateTimeConverter <a name="CloudwatchLogTransformerTransformerConfigDateTimeConverter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverter {
	MatchPatterns: *[]*string,
	Source: *string,
	Target: *string,
	Locale: *string,
	SourceTimezone: *string,
	TargetFormat: *string,
	TargetTimezone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverter.property.matchPatterns">MatchPatterns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#match_patterns CloudwatchLogTransformer#match_patterns}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverter.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverter.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#target CloudwatchLogTransformer#target}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverter.property.locale">Locale</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#locale CloudwatchLogTransformer#locale}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverter.property.sourceTimezone">SourceTimezone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source_timezone CloudwatchLogTransformer#source_timezone}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverter.property.targetFormat">TargetFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#target_format CloudwatchLogTransformer#target_format}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverter.property.targetTimezone">TargetTimezone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#target_timezone CloudwatchLogTransformer#target_timezone}. |

---

##### `MatchPatterns`<sup>Required</sup> <a name="MatchPatterns" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverter.property.matchPatterns"></a>

```go
MatchPatterns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#match_patterns CloudwatchLogTransformer#match_patterns}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverter.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}.

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverter.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#target CloudwatchLogTransformer#target}.

---

##### `Locale`<sup>Optional</sup> <a name="Locale" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverter.property.locale"></a>

```go
Locale *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#locale CloudwatchLogTransformer#locale}.

---

##### `SourceTimezone`<sup>Optional</sup> <a name="SourceTimezone" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverter.property.sourceTimezone"></a>

```go
SourceTimezone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source_timezone CloudwatchLogTransformer#source_timezone}.

---

##### `TargetFormat`<sup>Optional</sup> <a name="TargetFormat" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverter.property.targetFormat"></a>

```go
TargetFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#target_format CloudwatchLogTransformer#target_format}.

---

##### `TargetTimezone`<sup>Optional</sup> <a name="TargetTimezone" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverter.property.targetTimezone"></a>

```go
TargetTimezone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#target_timezone CloudwatchLogTransformer#target_timezone}.

---

### CloudwatchLogTransformerTransformerConfigDeleteKeys <a name="CloudwatchLogTransformerTransformerConfigDeleteKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigDeleteKeys {
	WithKeys: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeys.property.withKeys">WithKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#with_keys CloudwatchLogTransformer#with_keys}. |

---

##### `WithKeys`<sup>Required</sup> <a name="WithKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeys.property.withKeys"></a>

```go
WithKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#with_keys CloudwatchLogTransformer#with_keys}.

---

### CloudwatchLogTransformerTransformerConfigGrok <a name="CloudwatchLogTransformerTransformerConfigGrok" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrok"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrok.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigGrok {
	Match: *string,
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrok.property.match">Match</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#match CloudwatchLogTransformer#match}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrok.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}. |

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrok.property.match"></a>

```go
Match *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#match CloudwatchLogTransformer#match}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrok.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}.

---

### CloudwatchLogTransformerTransformerConfigListToMap <a name="CloudwatchLogTransformerTransformerConfigListToMap" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigListToMap {
	Key: *string,
	Source: *string,
	Flatten: interface{},
	FlattenedElement: *string,
	Target: *string,
	ValueKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMap.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#key CloudwatchLogTransformer#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMap.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMap.property.flatten">Flatten</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#flatten CloudwatchLogTransformer#flatten}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMap.property.flattenedElement">FlattenedElement</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#flattened_element CloudwatchLogTransformer#flattened_element}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMap.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#target CloudwatchLogTransformer#target}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMap.property.valueKey">ValueKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#value_key CloudwatchLogTransformer#value_key}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMap.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#key CloudwatchLogTransformer#key}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMap.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}.

---

##### `Flatten`<sup>Optional</sup> <a name="Flatten" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMap.property.flatten"></a>

```go
Flatten interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#flatten CloudwatchLogTransformer#flatten}.

---

##### `FlattenedElement`<sup>Optional</sup> <a name="FlattenedElement" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMap.property.flattenedElement"></a>

```go
FlattenedElement *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#flattened_element CloudwatchLogTransformer#flattened_element}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMap.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#target CloudwatchLogTransformer#target}.

---

##### `ValueKey`<sup>Optional</sup> <a name="ValueKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMap.property.valueKey"></a>

```go
ValueKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#value_key CloudwatchLogTransformer#value_key}.

---

### CloudwatchLogTransformerTransformerConfigLowerCaseString <a name="CloudwatchLogTransformerTransformerConfigLowerCaseString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseString.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigLowerCaseString {
	WithKeys: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseString.property.withKeys">WithKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#with_keys CloudwatchLogTransformer#with_keys}. |

---

##### `WithKeys`<sup>Required</sup> <a name="WithKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseString.property.withKeys"></a>

```go
WithKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#with_keys CloudwatchLogTransformer#with_keys}.

---

### CloudwatchLogTransformerTransformerConfigMoveKeys <a name="CloudwatchLogTransformerTransformerConfigMoveKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigMoveKeys {
	Entry: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeys.property.entry">Entry</a></code> | <code>interface{}</code> | entry block. |

---

##### `Entry`<sup>Optional</sup> <a name="Entry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeys.property.entry"></a>

```go
Entry interface{}
```

- *Type:* interface{}

entry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#entry CloudwatchLogTransformer#entry}

---

### CloudwatchLogTransformerTransformerConfigMoveKeysEntry <a name="CloudwatchLogTransformerTransformerConfigMoveKeysEntry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntry {
	Source: *string,
	Target: *string,
	OverwriteIfExists: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntry.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntry.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#target CloudwatchLogTransformer#target}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntry.property.overwriteIfExists">OverwriteIfExists</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#overwrite_if_exists CloudwatchLogTransformer#overwrite_if_exists}. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntry.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}.

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntry.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#target CloudwatchLogTransformer#target}.

---

##### `OverwriteIfExists`<sup>Optional</sup> <a name="OverwriteIfExists" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntry.property.overwriteIfExists"></a>

```go
OverwriteIfExists interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#overwrite_if_exists CloudwatchLogTransformer#overwrite_if_exists}.

---

### CloudwatchLogTransformerTransformerConfigParseCloudfront <a name="CloudwatchLogTransformerTransformerConfigParseCloudfront" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfront"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfront.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigParseCloudfront {
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfront.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}. |

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfront.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}.

---

### CloudwatchLogTransformerTransformerConfigParseJson <a name="CloudwatchLogTransformerTransformerConfigParseJson" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJson.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigParseJson {
	Destination: *string,
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJson.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#destination CloudwatchLogTransformer#destination}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJson.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJson.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#destination CloudwatchLogTransformer#destination}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJson.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}.

---

### CloudwatchLogTransformerTransformerConfigParseKeyValue <a name="CloudwatchLogTransformerTransformerConfigParseKeyValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigParseKeyValue {
	Destination: *string,
	FieldDelimiter: *string,
	KeyPrefix: *string,
	KeyValueDelimiter: *string,
	NonMatchValue: *string,
	OverwriteIfExists: interface{},
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValue.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#destination CloudwatchLogTransformer#destination}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValue.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#field_delimiter CloudwatchLogTransformer#field_delimiter}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValue.property.keyPrefix">KeyPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#key_prefix CloudwatchLogTransformer#key_prefix}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValue.property.keyValueDelimiter">KeyValueDelimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#key_value_delimiter CloudwatchLogTransformer#key_value_delimiter}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValue.property.nonMatchValue">NonMatchValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#non_match_value CloudwatchLogTransformer#non_match_value}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValue.property.overwriteIfExists">OverwriteIfExists</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#overwrite_if_exists CloudwatchLogTransformer#overwrite_if_exists}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValue.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValue.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#destination CloudwatchLogTransformer#destination}.

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValue.property.fieldDelimiter"></a>

```go
FieldDelimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#field_delimiter CloudwatchLogTransformer#field_delimiter}.

---

##### `KeyPrefix`<sup>Optional</sup> <a name="KeyPrefix" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValue.property.keyPrefix"></a>

```go
KeyPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#key_prefix CloudwatchLogTransformer#key_prefix}.

---

##### `KeyValueDelimiter`<sup>Optional</sup> <a name="KeyValueDelimiter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValue.property.keyValueDelimiter"></a>

```go
KeyValueDelimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#key_value_delimiter CloudwatchLogTransformer#key_value_delimiter}.

---

##### `NonMatchValue`<sup>Optional</sup> <a name="NonMatchValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValue.property.nonMatchValue"></a>

```go
NonMatchValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#non_match_value CloudwatchLogTransformer#non_match_value}.

---

##### `OverwriteIfExists`<sup>Optional</sup> <a name="OverwriteIfExists" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValue.property.overwriteIfExists"></a>

```go
OverwriteIfExists interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#overwrite_if_exists CloudwatchLogTransformer#overwrite_if_exists}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValue.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}.

---

### CloudwatchLogTransformerTransformerConfigParsePostgres <a name="CloudwatchLogTransformerTransformerConfigParsePostgres" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgres"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgres.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigParsePostgres {
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgres.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}. |

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgres.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}.

---

### CloudwatchLogTransformerTransformerConfigParseRoute53 <a name="CloudwatchLogTransformerTransformerConfigParseRoute53" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigParseRoute53 {
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}. |

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}.

---

### CloudwatchLogTransformerTransformerConfigParseToOcsf <a name="CloudwatchLogTransformerTransformerConfigParseToOcsf" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsf.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigParseToOcsf {
	EventSource: *string,
	OcsfVersion: *string,
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsf.property.eventSource">EventSource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#event_source CloudwatchLogTransformer#event_source}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsf.property.ocsfVersion">OcsfVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#ocsf_version CloudwatchLogTransformer#ocsf_version}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsf.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}. |

---

##### `EventSource`<sup>Required</sup> <a name="EventSource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsf.property.eventSource"></a>

```go
EventSource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#event_source CloudwatchLogTransformer#event_source}.

---

##### `OcsfVersion`<sup>Required</sup> <a name="OcsfVersion" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsf.property.ocsfVersion"></a>

```go
OcsfVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#ocsf_version CloudwatchLogTransformer#ocsf_version}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsf.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}.

---

### CloudwatchLogTransformerTransformerConfigParseVpc <a name="CloudwatchLogTransformerTransformerConfigParseVpc" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigParseVpc {
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpc.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}. |

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpc.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}.

---

### CloudwatchLogTransformerTransformerConfigParseWaf <a name="CloudwatchLogTransformerTransformerConfigParseWaf" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWaf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWaf.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigParseWaf {
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWaf.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}. |

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWaf.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}.

---

### CloudwatchLogTransformerTransformerConfigRenameKeys <a name="CloudwatchLogTransformerTransformerConfigRenameKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigRenameKeys {
	Entry: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeys.property.entry">Entry</a></code> | <code>interface{}</code> | entry block. |

---

##### `Entry`<sup>Optional</sup> <a name="Entry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeys.property.entry"></a>

```go
Entry interface{}
```

- *Type:* interface{}

entry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#entry CloudwatchLogTransformer#entry}

---

### CloudwatchLogTransformerTransformerConfigRenameKeysEntry <a name="CloudwatchLogTransformerTransformerConfigRenameKeysEntry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntry {
	Key: *string,
	RenameTo: *string,
	OverwriteIfExists: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntry.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#key CloudwatchLogTransformer#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntry.property.renameTo">RenameTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#rename_to CloudwatchLogTransformer#rename_to}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntry.property.overwriteIfExists">OverwriteIfExists</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#overwrite_if_exists CloudwatchLogTransformer#overwrite_if_exists}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntry.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#key CloudwatchLogTransformer#key}.

---

##### `RenameTo`<sup>Required</sup> <a name="RenameTo" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntry.property.renameTo"></a>

```go
RenameTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#rename_to CloudwatchLogTransformer#rename_to}.

---

##### `OverwriteIfExists`<sup>Optional</sup> <a name="OverwriteIfExists" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntry.property.overwriteIfExists"></a>

```go
OverwriteIfExists interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#overwrite_if_exists CloudwatchLogTransformer#overwrite_if_exists}.

---

### CloudwatchLogTransformerTransformerConfigSplitString <a name="CloudwatchLogTransformerTransformerConfigSplitString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitString.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigSplitString {
	Entry: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitString.property.entry">Entry</a></code> | <code>interface{}</code> | entry block. |

---

##### `Entry`<sup>Optional</sup> <a name="Entry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitString.property.entry"></a>

```go
Entry interface{}
```

- *Type:* interface{}

entry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#entry CloudwatchLogTransformer#entry}

---

### CloudwatchLogTransformerTransformerConfigSplitStringEntry <a name="CloudwatchLogTransformerTransformerConfigSplitStringEntry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntry {
	Delimiter: *string,
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntry.property.delimiter">Delimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#delimiter CloudwatchLogTransformer#delimiter}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntry.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}. |

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntry.property.delimiter"></a>

```go
Delimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#delimiter CloudwatchLogTransformer#delimiter}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntry.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}.

---

### CloudwatchLogTransformerTransformerConfigSubstituteString <a name="CloudwatchLogTransformerTransformerConfigSubstituteString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteString.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigSubstituteString {
	Entry: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteString.property.entry">Entry</a></code> | <code>interface{}</code> | entry block. |

---

##### `Entry`<sup>Optional</sup> <a name="Entry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteString.property.entry"></a>

```go
Entry interface{}
```

- *Type:* interface{}

entry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#entry CloudwatchLogTransformer#entry}

---

### CloudwatchLogTransformerTransformerConfigSubstituteStringEntry <a name="CloudwatchLogTransformerTransformerConfigSubstituteStringEntry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntry {
	From: *string,
	Source: *string,
	To: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntry.property.from">From</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#from CloudwatchLogTransformer#from}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntry.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntry.property.to">To</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#to CloudwatchLogTransformer#to}. |

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntry.property.from"></a>

```go
From *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#from CloudwatchLogTransformer#from}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntry.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}.

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntry.property.to"></a>

```go
To *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#to CloudwatchLogTransformer#to}.

---

### CloudwatchLogTransformerTransformerConfigTrimString <a name="CloudwatchLogTransformerTransformerConfigTrimString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimString.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigTrimString {
	WithKeys: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimString.property.withKeys">WithKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#with_keys CloudwatchLogTransformer#with_keys}. |

---

##### `WithKeys`<sup>Required</sup> <a name="WithKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimString.property.withKeys"></a>

```go
WithKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#with_keys CloudwatchLogTransformer#with_keys}.

---

### CloudwatchLogTransformerTransformerConfigTypeConverter <a name="CloudwatchLogTransformerTransformerConfigTypeConverter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigTypeConverter {
	Entry: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverter.property.entry">Entry</a></code> | <code>interface{}</code> | entry block. |

---

##### `Entry`<sup>Optional</sup> <a name="Entry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverter.property.entry"></a>

```go
Entry interface{}
```

- *Type:* interface{}

entry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#entry CloudwatchLogTransformer#entry}

---

### CloudwatchLogTransformerTransformerConfigTypeConverterEntry <a name="CloudwatchLogTransformerTransformerConfigTypeConverterEntry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntry {
	Key: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntry.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#key CloudwatchLogTransformer#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntry.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#type CloudwatchLogTransformer#type}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntry.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#key CloudwatchLogTransformer#key}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntry.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#type CloudwatchLogTransformer#type}.

---

### CloudwatchLogTransformerTransformerConfigUpperCaseString <a name="CloudwatchLogTransformerTransformerConfigUpperCaseString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseString.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

&cloudwatchlogtransformer.CloudwatchLogTransformerTransformerConfigUpperCaseString {
	WithKeys: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseString.property.withKeys">WithKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#with_keys CloudwatchLogTransformer#with_keys}. |

---

##### `WithKeys`<sup>Required</sup> <a name="WithKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseString.property.withKeys"></a>

```go
WithKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/cloudwatch_log_transformer#with_keys CloudwatchLogTransformer#with_keys}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchLogTransformerTransformerConfigAddKeysEntryList <a name="CloudwatchLogTransformerTransformerConfigAddKeysEntryList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigAddKeysEntryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigAddKeysEntryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference <a name="CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.resetOverwriteIfExists">ResetOverwriteIfExists</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOverwriteIfExists` <a name="ResetOverwriteIfExists" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.resetOverwriteIfExists"></a>

```go
func ResetOverwriteIfExists()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.property.overwriteIfExistsInput">OverwriteIfExistsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.property.overwriteIfExists">OverwriteIfExists</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `OverwriteIfExistsInput`<sup>Optional</sup> <a name="OverwriteIfExistsInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.property.overwriteIfExistsInput"></a>

```go
func OverwriteIfExistsInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `OverwriteIfExists`<sup>Required</sup> <a name="OverwriteIfExists" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.property.overwriteIfExists"></a>

```go
func OverwriteIfExists() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigAddKeysList <a name="CloudwatchLogTransformerTransformerConfigAddKeysList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigAddKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigAddKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigAddKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigAddKeysOutputReference <a name="CloudwatchLogTransformerTransformerConfigAddKeysOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigAddKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigAddKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.putEntry">PutEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.resetEntry">ResetEntry</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEntry` <a name="PutEntry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.putEntry"></a>

```go
func PutEntry(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.putEntry.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEntry` <a name="ResetEntry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.resetEntry"></a>

```go
func ResetEntry()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.property.entry">Entry</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList">CloudwatchLogTransformerTransformerConfigAddKeysEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.property.entryInput">EntryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Entry`<sup>Required</sup> <a name="Entry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.property.entry"></a>

```go
func Entry() CloudwatchLogTransformerTransformerConfigAddKeysEntryList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysEntryList">CloudwatchLogTransformerTransformerConfigAddKeysEntryList</a>

---

##### `EntryInput`<sup>Optional</sup> <a name="EntryInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.property.entryInput"></a>

```go
func EntryInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigCopyValueEntryList <a name="CloudwatchLogTransformerTransformerConfigCopyValueEntryList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigCopyValueEntryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigCopyValueEntryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference <a name="CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.resetOverwriteIfExists">ResetOverwriteIfExists</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOverwriteIfExists` <a name="ResetOverwriteIfExists" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.resetOverwriteIfExists"></a>

```go
func ResetOverwriteIfExists()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.property.overwriteIfExistsInput">OverwriteIfExistsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.property.overwriteIfExists">OverwriteIfExists</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OverwriteIfExistsInput`<sup>Optional</sup> <a name="OverwriteIfExistsInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.property.overwriteIfExistsInput"></a>

```go
func OverwriteIfExistsInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `OverwriteIfExists`<sup>Required</sup> <a name="OverwriteIfExists" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.property.overwriteIfExists"></a>

```go
func OverwriteIfExists() interface{}
```

- *Type:* interface{}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigCopyValueList <a name="CloudwatchLogTransformerTransformerConfigCopyValueList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigCopyValueList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigCopyValueList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigCopyValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigCopyValueOutputReference <a name="CloudwatchLogTransformerTransformerConfigCopyValueOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigCopyValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigCopyValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.putEntry">PutEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.resetEntry">ResetEntry</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEntry` <a name="PutEntry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.putEntry"></a>

```go
func PutEntry(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.putEntry.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEntry` <a name="ResetEntry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.resetEntry"></a>

```go
func ResetEntry()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.property.entry">Entry</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList">CloudwatchLogTransformerTransformerConfigCopyValueEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.property.entryInput">EntryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Entry`<sup>Required</sup> <a name="Entry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.property.entry"></a>

```go
func Entry() CloudwatchLogTransformerTransformerConfigCopyValueEntryList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueEntryList">CloudwatchLogTransformerTransformerConfigCopyValueEntryList</a>

---

##### `EntryInput`<sup>Optional</sup> <a name="EntryInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.property.entryInput"></a>

```go
func EntryInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigCsvList <a name="CloudwatchLogTransformerTransformerConfigCsvList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigCsvList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigCsvList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigCsvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigCsvOutputReference <a name="CloudwatchLogTransformerTransformerConfigCsvOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigCsvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigCsvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.resetColumns">ResetColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.resetQuoteCharacter">ResetQuoteCharacter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumns` <a name="ResetColumns" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.resetColumns"></a>

```go
func ResetColumns()
```

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.resetDelimiter"></a>

```go
func ResetDelimiter()
```

##### `ResetQuoteCharacter` <a name="ResetQuoteCharacter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.resetQuoteCharacter"></a>

```go
func ResetQuoteCharacter()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.property.quoteCharacterInput">QuoteCharacterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.property.columns">Columns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.property.quoteCharacter">QuoteCharacter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.property.columnsInput"></a>

```go
func ColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.property.delimiterInput"></a>

```go
func DelimiterInput() *string
```

- *Type:* *string

---

##### `QuoteCharacterInput`<sup>Optional</sup> <a name="QuoteCharacterInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.property.quoteCharacterInput"></a>

```go
func QuoteCharacterInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.property.columns"></a>

```go
func Columns() *[]*string
```

- *Type:* *[]*string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `QuoteCharacter`<sup>Required</sup> <a name="QuoteCharacter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.property.quoteCharacter"></a>

```go
func QuoteCharacter() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigDateTimeConverterList <a name="CloudwatchLogTransformerTransformerConfigDateTimeConverterList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigDateTimeConverterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigDateTimeConverterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference <a name="CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.resetLocale">ResetLocale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.resetSourceTimezone">ResetSourceTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.resetTargetFormat">ResetTargetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.resetTargetTimezone">ResetTargetTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocale` <a name="ResetLocale" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.resetLocale"></a>

```go
func ResetLocale()
```

##### `ResetSourceTimezone` <a name="ResetSourceTimezone" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.resetSourceTimezone"></a>

```go
func ResetSourceTimezone()
```

##### `ResetTargetFormat` <a name="ResetTargetFormat" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.resetTargetFormat"></a>

```go
func ResetTargetFormat()
```

##### `ResetTargetTimezone` <a name="ResetTargetTimezone" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.resetTargetTimezone"></a>

```go
func ResetTargetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.localeInput">LocaleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.matchPatternsInput">MatchPatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.sourceTimezoneInput">SourceTimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.targetFormatInput">TargetFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.targetTimezoneInput">TargetTimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.matchPatterns">MatchPatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.sourceTimezone">SourceTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.targetFormat">TargetFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.targetTimezone">TargetTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.localeInput"></a>

```go
func LocaleInput() *string
```

- *Type:* *string

---

##### `MatchPatternsInput`<sup>Optional</sup> <a name="MatchPatternsInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.matchPatternsInput"></a>

```go
func MatchPatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `SourceTimezoneInput`<sup>Optional</sup> <a name="SourceTimezoneInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.sourceTimezoneInput"></a>

```go
func SourceTimezoneInput() *string
```

- *Type:* *string

---

##### `TargetFormatInput`<sup>Optional</sup> <a name="TargetFormatInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.targetFormatInput"></a>

```go
func TargetFormatInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TargetTimezoneInput`<sup>Optional</sup> <a name="TargetTimezoneInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.targetTimezoneInput"></a>

```go
func TargetTimezoneInput() *string
```

- *Type:* *string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `MatchPatterns`<sup>Required</sup> <a name="MatchPatterns" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.matchPatterns"></a>

```go
func MatchPatterns() *[]*string
```

- *Type:* *[]*string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `SourceTimezone`<sup>Required</sup> <a name="SourceTimezone" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.sourceTimezone"></a>

```go
func SourceTimezone() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `TargetFormat`<sup>Required</sup> <a name="TargetFormat" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.targetFormat"></a>

```go
func TargetFormat() *string
```

- *Type:* *string

---

##### `TargetTimezone`<sup>Required</sup> <a name="TargetTimezone" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.targetTimezone"></a>

```go
func TargetTimezone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigDeleteKeysList <a name="CloudwatchLogTransformerTransformerConfigDeleteKeysList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigDeleteKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigDeleteKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference <a name="CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.property.withKeysInput">WithKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.property.withKeys">WithKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WithKeysInput`<sup>Optional</sup> <a name="WithKeysInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.property.withKeysInput"></a>

```go
func WithKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `WithKeys`<sup>Required</sup> <a name="WithKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.property.withKeys"></a>

```go
func WithKeys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigGrokList <a name="CloudwatchLogTransformerTransformerConfigGrokList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigGrokList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigGrokList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigGrokOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigGrokOutputReference <a name="CloudwatchLogTransformerTransformerConfigGrokOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigGrokOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigGrokOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.property.matchInput">MatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.property.match">Match</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.property.matchInput"></a>

```go
func MatchInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.property.match"></a>

```go
func Match() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigList <a name="CloudwatchLogTransformerTransformerConfigList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigListToMapList <a name="CloudwatchLogTransformerTransformerConfigListToMapList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigListToMapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigListToMapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigListToMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigListToMapOutputReference <a name="CloudwatchLogTransformerTransformerConfigListToMapOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigListToMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigListToMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.resetFlatten">ResetFlatten</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.resetFlattenedElement">ResetFlattenedElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.resetValueKey">ResetValueKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFlatten` <a name="ResetFlatten" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.resetFlatten"></a>

```go
func ResetFlatten()
```

##### `ResetFlattenedElement` <a name="ResetFlattenedElement" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.resetFlattenedElement"></a>

```go
func ResetFlattenedElement()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetValueKey` <a name="ResetValueKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.resetValueKey"></a>

```go
func ResetValueKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.flattenedElementInput">FlattenedElementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.flattenInput">FlattenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.valueKeyInput">ValueKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.flatten">Flatten</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.flattenedElement">FlattenedElement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.valueKey">ValueKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FlattenedElementInput`<sup>Optional</sup> <a name="FlattenedElementInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.flattenedElementInput"></a>

```go
func FlattenedElementInput() *string
```

- *Type:* *string

---

##### `FlattenInput`<sup>Optional</sup> <a name="FlattenInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.flattenInput"></a>

```go
func FlattenInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `ValueKeyInput`<sup>Optional</sup> <a name="ValueKeyInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.valueKeyInput"></a>

```go
func ValueKeyInput() *string
```

- *Type:* *string

---

##### `Flatten`<sup>Required</sup> <a name="Flatten" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.flatten"></a>

```go
func Flatten() interface{}
```

- *Type:* interface{}

---

##### `FlattenedElement`<sup>Required</sup> <a name="FlattenedElement" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.flattenedElement"></a>

```go
func FlattenedElement() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `ValueKey`<sup>Required</sup> <a name="ValueKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.valueKey"></a>

```go
func ValueKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigLowerCaseStringList <a name="CloudwatchLogTransformerTransformerConfigLowerCaseStringList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigLowerCaseStringList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigLowerCaseStringList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference <a name="CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.property.withKeysInput">WithKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.property.withKeys">WithKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WithKeysInput`<sup>Optional</sup> <a name="WithKeysInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.property.withKeysInput"></a>

```go
func WithKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `WithKeys`<sup>Required</sup> <a name="WithKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.property.withKeys"></a>

```go
func WithKeys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigMoveKeysEntryList <a name="CloudwatchLogTransformerTransformerConfigMoveKeysEntryList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigMoveKeysEntryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigMoveKeysEntryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference <a name="CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.resetOverwriteIfExists">ResetOverwriteIfExists</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOverwriteIfExists` <a name="ResetOverwriteIfExists" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.resetOverwriteIfExists"></a>

```go
func ResetOverwriteIfExists()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.property.overwriteIfExistsInput">OverwriteIfExistsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.property.overwriteIfExists">OverwriteIfExists</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OverwriteIfExistsInput`<sup>Optional</sup> <a name="OverwriteIfExistsInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.property.overwriteIfExistsInput"></a>

```go
func OverwriteIfExistsInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `OverwriteIfExists`<sup>Required</sup> <a name="OverwriteIfExists" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.property.overwriteIfExists"></a>

```go
func OverwriteIfExists() interface{}
```

- *Type:* interface{}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigMoveKeysList <a name="CloudwatchLogTransformerTransformerConfigMoveKeysList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigMoveKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigMoveKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference <a name="CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigMoveKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.putEntry">PutEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.resetEntry">ResetEntry</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEntry` <a name="PutEntry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.putEntry"></a>

```go
func PutEntry(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.putEntry.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEntry` <a name="ResetEntry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.resetEntry"></a>

```go
func ResetEntry()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.property.entry">Entry</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList">CloudwatchLogTransformerTransformerConfigMoveKeysEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.property.entryInput">EntryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Entry`<sup>Required</sup> <a name="Entry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.property.entry"></a>

```go
func Entry() CloudwatchLogTransformerTransformerConfigMoveKeysEntryList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysEntryList">CloudwatchLogTransformerTransformerConfigMoveKeysEntryList</a>

---

##### `EntryInput`<sup>Optional</sup> <a name="EntryInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.property.entryInput"></a>

```go
func EntryInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigOutputReference <a name="CloudwatchLogTransformerTransformerConfigOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putAddKeys">PutAddKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putCopyValue">PutCopyValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putCsv">PutCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putDateTimeConverter">PutDateTimeConverter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putDeleteKeys">PutDeleteKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putGrok">PutGrok</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putListToMap">PutListToMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putLowerCaseString">PutLowerCaseString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putMoveKeys">PutMoveKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParseCloudfront">PutParseCloudfront</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParseJson">PutParseJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParseKeyValue">PutParseKeyValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParsePostgres">PutParsePostgres</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParseRoute53">PutParseRoute53</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParseToOcsf">PutParseToOcsf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParseVpc">PutParseVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParseWaf">PutParseWaf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putRenameKeys">PutRenameKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putSplitString">PutSplitString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putSubstituteString">PutSubstituteString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putTrimString">PutTrimString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putTypeConverter">PutTypeConverter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putUpperCaseString">PutUpperCaseString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetAddKeys">ResetAddKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetCopyValue">ResetCopyValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetCsv">ResetCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetDateTimeConverter">ResetDateTimeConverter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetDeleteKeys">ResetDeleteKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetGrok">ResetGrok</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetListToMap">ResetListToMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetLowerCaseString">ResetLowerCaseString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetMoveKeys">ResetMoveKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetParseCloudfront">ResetParseCloudfront</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetParseJson">ResetParseJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetParseKeyValue">ResetParseKeyValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetParsePostgres">ResetParsePostgres</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetParseRoute53">ResetParseRoute53</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetParseToOcsf">ResetParseToOcsf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetParseVpc">ResetParseVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetParseWaf">ResetParseWaf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetRenameKeys">ResetRenameKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetSplitString">ResetSplitString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetSubstituteString">ResetSubstituteString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetTrimString">ResetTrimString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetTypeConverter">ResetTypeConverter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetUpperCaseString">ResetUpperCaseString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAddKeys` <a name="PutAddKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putAddKeys"></a>

```go
func PutAddKeys(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putAddKeys.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCopyValue` <a name="PutCopyValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putCopyValue"></a>

```go
func PutCopyValue(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putCopyValue.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCsv` <a name="PutCsv" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putCsv"></a>

```go
func PutCsv(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putCsv.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDateTimeConverter` <a name="PutDateTimeConverter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putDateTimeConverter"></a>

```go
func PutDateTimeConverter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putDateTimeConverter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDeleteKeys` <a name="PutDeleteKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putDeleteKeys"></a>

```go
func PutDeleteKeys(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putDeleteKeys.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGrok` <a name="PutGrok" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putGrok"></a>

```go
func PutGrok(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putGrok.parameter.value"></a>

- *Type:* interface{}

---

##### `PutListToMap` <a name="PutListToMap" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putListToMap"></a>

```go
func PutListToMap(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putListToMap.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLowerCaseString` <a name="PutLowerCaseString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putLowerCaseString"></a>

```go
func PutLowerCaseString(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putLowerCaseString.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMoveKeys` <a name="PutMoveKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putMoveKeys"></a>

```go
func PutMoveKeys(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putMoveKeys.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParseCloudfront` <a name="PutParseCloudfront" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParseCloudfront"></a>

```go
func PutParseCloudfront(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParseCloudfront.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParseJson` <a name="PutParseJson" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParseJson"></a>

```go
func PutParseJson(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParseJson.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParseKeyValue` <a name="PutParseKeyValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParseKeyValue"></a>

```go
func PutParseKeyValue(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParseKeyValue.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParsePostgres` <a name="PutParsePostgres" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParsePostgres"></a>

```go
func PutParsePostgres(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParsePostgres.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParseRoute53` <a name="PutParseRoute53" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParseRoute53"></a>

```go
func PutParseRoute53(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParseRoute53.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParseToOcsf` <a name="PutParseToOcsf" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParseToOcsf"></a>

```go
func PutParseToOcsf(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParseToOcsf.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParseVpc` <a name="PutParseVpc" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParseVpc"></a>

```go
func PutParseVpc(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParseVpc.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParseWaf` <a name="PutParseWaf" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParseWaf"></a>

```go
func PutParseWaf(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putParseWaf.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRenameKeys` <a name="PutRenameKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putRenameKeys"></a>

```go
func PutRenameKeys(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putRenameKeys.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSplitString` <a name="PutSplitString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putSplitString"></a>

```go
func PutSplitString(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putSplitString.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSubstituteString` <a name="PutSubstituteString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putSubstituteString"></a>

```go
func PutSubstituteString(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putSubstituteString.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTrimString` <a name="PutTrimString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putTrimString"></a>

```go
func PutTrimString(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putTrimString.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTypeConverter` <a name="PutTypeConverter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putTypeConverter"></a>

```go
func PutTypeConverter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putTypeConverter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUpperCaseString` <a name="PutUpperCaseString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putUpperCaseString"></a>

```go
func PutUpperCaseString(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.putUpperCaseString.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAddKeys` <a name="ResetAddKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetAddKeys"></a>

```go
func ResetAddKeys()
```

##### `ResetCopyValue` <a name="ResetCopyValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetCopyValue"></a>

```go
func ResetCopyValue()
```

##### `ResetCsv` <a name="ResetCsv" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetCsv"></a>

```go
func ResetCsv()
```

##### `ResetDateTimeConverter` <a name="ResetDateTimeConverter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetDateTimeConverter"></a>

```go
func ResetDateTimeConverter()
```

##### `ResetDeleteKeys` <a name="ResetDeleteKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetDeleteKeys"></a>

```go
func ResetDeleteKeys()
```

##### `ResetGrok` <a name="ResetGrok" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetGrok"></a>

```go
func ResetGrok()
```

##### `ResetListToMap` <a name="ResetListToMap" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetListToMap"></a>

```go
func ResetListToMap()
```

##### `ResetLowerCaseString` <a name="ResetLowerCaseString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetLowerCaseString"></a>

```go
func ResetLowerCaseString()
```

##### `ResetMoveKeys` <a name="ResetMoveKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetMoveKeys"></a>

```go
func ResetMoveKeys()
```

##### `ResetParseCloudfront` <a name="ResetParseCloudfront" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetParseCloudfront"></a>

```go
func ResetParseCloudfront()
```

##### `ResetParseJson` <a name="ResetParseJson" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetParseJson"></a>

```go
func ResetParseJson()
```

##### `ResetParseKeyValue` <a name="ResetParseKeyValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetParseKeyValue"></a>

```go
func ResetParseKeyValue()
```

##### `ResetParsePostgres` <a name="ResetParsePostgres" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetParsePostgres"></a>

```go
func ResetParsePostgres()
```

##### `ResetParseRoute53` <a name="ResetParseRoute53" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetParseRoute53"></a>

```go
func ResetParseRoute53()
```

##### `ResetParseToOcsf` <a name="ResetParseToOcsf" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetParseToOcsf"></a>

```go
func ResetParseToOcsf()
```

##### `ResetParseVpc` <a name="ResetParseVpc" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetParseVpc"></a>

```go
func ResetParseVpc()
```

##### `ResetParseWaf` <a name="ResetParseWaf" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetParseWaf"></a>

```go
func ResetParseWaf()
```

##### `ResetRenameKeys` <a name="ResetRenameKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetRenameKeys"></a>

```go
func ResetRenameKeys()
```

##### `ResetSplitString` <a name="ResetSplitString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetSplitString"></a>

```go
func ResetSplitString()
```

##### `ResetSubstituteString` <a name="ResetSubstituteString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetSubstituteString"></a>

```go
func ResetSubstituteString()
```

##### `ResetTrimString` <a name="ResetTrimString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetTrimString"></a>

```go
func ResetTrimString()
```

##### `ResetTypeConverter` <a name="ResetTypeConverter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetTypeConverter"></a>

```go
func ResetTypeConverter()
```

##### `ResetUpperCaseString` <a name="ResetUpperCaseString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.resetUpperCaseString"></a>

```go
func ResetUpperCaseString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.addKeys">AddKeys</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList">CloudwatchLogTransformerTransformerConfigAddKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.copyValue">CopyValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList">CloudwatchLogTransformerTransformerConfigCopyValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList">CloudwatchLogTransformerTransformerConfigCsvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.dateTimeConverter">DateTimeConverter</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList">CloudwatchLogTransformerTransformerConfigDateTimeConverterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.deleteKeys">DeleteKeys</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList">CloudwatchLogTransformerTransformerConfigDeleteKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.grok">Grok</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList">CloudwatchLogTransformerTransformerConfigGrokList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.listToMap">ListToMap</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList">CloudwatchLogTransformerTransformerConfigListToMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.lowerCaseString">LowerCaseString</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList">CloudwatchLogTransformerTransformerConfigLowerCaseStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.moveKeys">MoveKeys</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList">CloudwatchLogTransformerTransformerConfigMoveKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseCloudfront">ParseCloudfront</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList">CloudwatchLogTransformerTransformerConfigParseCloudfrontList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseJson">ParseJson</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList">CloudwatchLogTransformerTransformerConfigParseJsonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseKeyValue">ParseKeyValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList">CloudwatchLogTransformerTransformerConfigParseKeyValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parsePostgres">ParsePostgres</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList">CloudwatchLogTransformerTransformerConfigParsePostgresList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseRoute53">ParseRoute53</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List">CloudwatchLogTransformerTransformerConfigParseRoute53List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseToOcsf">ParseToOcsf</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList">CloudwatchLogTransformerTransformerConfigParseToOcsfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseVpc">ParseVpc</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList">CloudwatchLogTransformerTransformerConfigParseVpcList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseWaf">ParseWaf</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList">CloudwatchLogTransformerTransformerConfigParseWafList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.renameKeys">RenameKeys</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList">CloudwatchLogTransformerTransformerConfigRenameKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.splitString">SplitString</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList">CloudwatchLogTransformerTransformerConfigSplitStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.substituteString">SubstituteString</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList">CloudwatchLogTransformerTransformerConfigSubstituteStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.trimString">TrimString</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList">CloudwatchLogTransformerTransformerConfigTrimStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.typeConverter">TypeConverter</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList">CloudwatchLogTransformerTransformerConfigTypeConverterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.upperCaseString">UpperCaseString</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList">CloudwatchLogTransformerTransformerConfigUpperCaseStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.addKeysInput">AddKeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.copyValueInput">CopyValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.csvInput">CsvInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.dateTimeConverterInput">DateTimeConverterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.deleteKeysInput">DeleteKeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.grokInput">GrokInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.listToMapInput">ListToMapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.lowerCaseStringInput">LowerCaseStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.moveKeysInput">MoveKeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseCloudfrontInput">ParseCloudfrontInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseJsonInput">ParseJsonInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseKeyValueInput">ParseKeyValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parsePostgresInput">ParsePostgresInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseRoute53Input">ParseRoute53Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseToOcsfInput">ParseToOcsfInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseVpcInput">ParseVpcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseWafInput">ParseWafInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.renameKeysInput">RenameKeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.splitStringInput">SplitStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.substituteStringInput">SubstituteStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.trimStringInput">TrimStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.typeConverterInput">TypeConverterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.upperCaseStringInput">UpperCaseStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddKeys`<sup>Required</sup> <a name="AddKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.addKeys"></a>

```go
func AddKeys() CloudwatchLogTransformerTransformerConfigAddKeysList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigAddKeysList">CloudwatchLogTransformerTransformerConfigAddKeysList</a>

---

##### `CopyValue`<sup>Required</sup> <a name="CopyValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.copyValue"></a>

```go
func CopyValue() CloudwatchLogTransformerTransformerConfigCopyValueList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCopyValueList">CloudwatchLogTransformerTransformerConfigCopyValueList</a>

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.csv"></a>

```go
func Csv() CloudwatchLogTransformerTransformerConfigCsvList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigCsvList">CloudwatchLogTransformerTransformerConfigCsvList</a>

---

##### `DateTimeConverter`<sup>Required</sup> <a name="DateTimeConverter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.dateTimeConverter"></a>

```go
func DateTimeConverter() CloudwatchLogTransformerTransformerConfigDateTimeConverterList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDateTimeConverterList">CloudwatchLogTransformerTransformerConfigDateTimeConverterList</a>

---

##### `DeleteKeys`<sup>Required</sup> <a name="DeleteKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.deleteKeys"></a>

```go
func DeleteKeys() CloudwatchLogTransformerTransformerConfigDeleteKeysList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigDeleteKeysList">CloudwatchLogTransformerTransformerConfigDeleteKeysList</a>

---

##### `Grok`<sup>Required</sup> <a name="Grok" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.grok"></a>

```go
func Grok() CloudwatchLogTransformerTransformerConfigGrokList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigGrokList">CloudwatchLogTransformerTransformerConfigGrokList</a>

---

##### `ListToMap`<sup>Required</sup> <a name="ListToMap" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.listToMap"></a>

```go
func ListToMap() CloudwatchLogTransformerTransformerConfigListToMapList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigListToMapList">CloudwatchLogTransformerTransformerConfigListToMapList</a>

---

##### `LowerCaseString`<sup>Required</sup> <a name="LowerCaseString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.lowerCaseString"></a>

```go
func LowerCaseString() CloudwatchLogTransformerTransformerConfigLowerCaseStringList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigLowerCaseStringList">CloudwatchLogTransformerTransformerConfigLowerCaseStringList</a>

---

##### `MoveKeys`<sup>Required</sup> <a name="MoveKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.moveKeys"></a>

```go
func MoveKeys() CloudwatchLogTransformerTransformerConfigMoveKeysList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigMoveKeysList">CloudwatchLogTransformerTransformerConfigMoveKeysList</a>

---

##### `ParseCloudfront`<sup>Required</sup> <a name="ParseCloudfront" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseCloudfront"></a>

```go
func ParseCloudfront() CloudwatchLogTransformerTransformerConfigParseCloudfrontList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList">CloudwatchLogTransformerTransformerConfigParseCloudfrontList</a>

---

##### `ParseJson`<sup>Required</sup> <a name="ParseJson" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseJson"></a>

```go
func ParseJson() CloudwatchLogTransformerTransformerConfigParseJsonList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList">CloudwatchLogTransformerTransformerConfigParseJsonList</a>

---

##### `ParseKeyValue`<sup>Required</sup> <a name="ParseKeyValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseKeyValue"></a>

```go
func ParseKeyValue() CloudwatchLogTransformerTransformerConfigParseKeyValueList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList">CloudwatchLogTransformerTransformerConfigParseKeyValueList</a>

---

##### `ParsePostgres`<sup>Required</sup> <a name="ParsePostgres" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parsePostgres"></a>

```go
func ParsePostgres() CloudwatchLogTransformerTransformerConfigParsePostgresList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList">CloudwatchLogTransformerTransformerConfigParsePostgresList</a>

---

##### `ParseRoute53`<sup>Required</sup> <a name="ParseRoute53" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseRoute53"></a>

```go
func ParseRoute53() CloudwatchLogTransformerTransformerConfigParseRoute53List
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List">CloudwatchLogTransformerTransformerConfigParseRoute53List</a>

---

##### `ParseToOcsf`<sup>Required</sup> <a name="ParseToOcsf" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseToOcsf"></a>

```go
func ParseToOcsf() CloudwatchLogTransformerTransformerConfigParseToOcsfList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList">CloudwatchLogTransformerTransformerConfigParseToOcsfList</a>

---

##### `ParseVpc`<sup>Required</sup> <a name="ParseVpc" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseVpc"></a>

```go
func ParseVpc() CloudwatchLogTransformerTransformerConfigParseVpcList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList">CloudwatchLogTransformerTransformerConfigParseVpcList</a>

---

##### `ParseWaf`<sup>Required</sup> <a name="ParseWaf" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseWaf"></a>

```go
func ParseWaf() CloudwatchLogTransformerTransformerConfigParseWafList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList">CloudwatchLogTransformerTransformerConfigParseWafList</a>

---

##### `RenameKeys`<sup>Required</sup> <a name="RenameKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.renameKeys"></a>

```go
func RenameKeys() CloudwatchLogTransformerTransformerConfigRenameKeysList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList">CloudwatchLogTransformerTransformerConfigRenameKeysList</a>

---

##### `SplitString`<sup>Required</sup> <a name="SplitString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.splitString"></a>

```go
func SplitString() CloudwatchLogTransformerTransformerConfigSplitStringList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList">CloudwatchLogTransformerTransformerConfigSplitStringList</a>

---

##### `SubstituteString`<sup>Required</sup> <a name="SubstituteString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.substituteString"></a>

```go
func SubstituteString() CloudwatchLogTransformerTransformerConfigSubstituteStringList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList">CloudwatchLogTransformerTransformerConfigSubstituteStringList</a>

---

##### `TrimString`<sup>Required</sup> <a name="TrimString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.trimString"></a>

```go
func TrimString() CloudwatchLogTransformerTransformerConfigTrimStringList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList">CloudwatchLogTransformerTransformerConfigTrimStringList</a>

---

##### `TypeConverter`<sup>Required</sup> <a name="TypeConverter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.typeConverter"></a>

```go
func TypeConverter() CloudwatchLogTransformerTransformerConfigTypeConverterList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList">CloudwatchLogTransformerTransformerConfigTypeConverterList</a>

---

##### `UpperCaseString`<sup>Required</sup> <a name="UpperCaseString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.upperCaseString"></a>

```go
func UpperCaseString() CloudwatchLogTransformerTransformerConfigUpperCaseStringList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList">CloudwatchLogTransformerTransformerConfigUpperCaseStringList</a>

---

##### `AddKeysInput`<sup>Optional</sup> <a name="AddKeysInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.addKeysInput"></a>

```go
func AddKeysInput() interface{}
```

- *Type:* interface{}

---

##### `CopyValueInput`<sup>Optional</sup> <a name="CopyValueInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.copyValueInput"></a>

```go
func CopyValueInput() interface{}
```

- *Type:* interface{}

---

##### `CsvInput`<sup>Optional</sup> <a name="CsvInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.csvInput"></a>

```go
func CsvInput() interface{}
```

- *Type:* interface{}

---

##### `DateTimeConverterInput`<sup>Optional</sup> <a name="DateTimeConverterInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.dateTimeConverterInput"></a>

```go
func DateTimeConverterInput() interface{}
```

- *Type:* interface{}

---

##### `DeleteKeysInput`<sup>Optional</sup> <a name="DeleteKeysInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.deleteKeysInput"></a>

```go
func DeleteKeysInput() interface{}
```

- *Type:* interface{}

---

##### `GrokInput`<sup>Optional</sup> <a name="GrokInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.grokInput"></a>

```go
func GrokInput() interface{}
```

- *Type:* interface{}

---

##### `ListToMapInput`<sup>Optional</sup> <a name="ListToMapInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.listToMapInput"></a>

```go
func ListToMapInput() interface{}
```

- *Type:* interface{}

---

##### `LowerCaseStringInput`<sup>Optional</sup> <a name="LowerCaseStringInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.lowerCaseStringInput"></a>

```go
func LowerCaseStringInput() interface{}
```

- *Type:* interface{}

---

##### `MoveKeysInput`<sup>Optional</sup> <a name="MoveKeysInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.moveKeysInput"></a>

```go
func MoveKeysInput() interface{}
```

- *Type:* interface{}

---

##### `ParseCloudfrontInput`<sup>Optional</sup> <a name="ParseCloudfrontInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseCloudfrontInput"></a>

```go
func ParseCloudfrontInput() interface{}
```

- *Type:* interface{}

---

##### `ParseJsonInput`<sup>Optional</sup> <a name="ParseJsonInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseJsonInput"></a>

```go
func ParseJsonInput() interface{}
```

- *Type:* interface{}

---

##### `ParseKeyValueInput`<sup>Optional</sup> <a name="ParseKeyValueInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseKeyValueInput"></a>

```go
func ParseKeyValueInput() interface{}
```

- *Type:* interface{}

---

##### `ParsePostgresInput`<sup>Optional</sup> <a name="ParsePostgresInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parsePostgresInput"></a>

```go
func ParsePostgresInput() interface{}
```

- *Type:* interface{}

---

##### `ParseRoute53Input`<sup>Optional</sup> <a name="ParseRoute53Input" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseRoute53Input"></a>

```go
func ParseRoute53Input() interface{}
```

- *Type:* interface{}

---

##### `ParseToOcsfInput`<sup>Optional</sup> <a name="ParseToOcsfInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseToOcsfInput"></a>

```go
func ParseToOcsfInput() interface{}
```

- *Type:* interface{}

---

##### `ParseVpcInput`<sup>Optional</sup> <a name="ParseVpcInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseVpcInput"></a>

```go
func ParseVpcInput() interface{}
```

- *Type:* interface{}

---

##### `ParseWafInput`<sup>Optional</sup> <a name="ParseWafInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.parseWafInput"></a>

```go
func ParseWafInput() interface{}
```

- *Type:* interface{}

---

##### `RenameKeysInput`<sup>Optional</sup> <a name="RenameKeysInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.renameKeysInput"></a>

```go
func RenameKeysInput() interface{}
```

- *Type:* interface{}

---

##### `SplitStringInput`<sup>Optional</sup> <a name="SplitStringInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.splitStringInput"></a>

```go
func SplitStringInput() interface{}
```

- *Type:* interface{}

---

##### `SubstituteStringInput`<sup>Optional</sup> <a name="SubstituteStringInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.substituteStringInput"></a>

```go
func SubstituteStringInput() interface{}
```

- *Type:* interface{}

---

##### `TrimStringInput`<sup>Optional</sup> <a name="TrimStringInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.trimStringInput"></a>

```go
func TrimStringInput() interface{}
```

- *Type:* interface{}

---

##### `TypeConverterInput`<sup>Optional</sup> <a name="TypeConverterInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.typeConverterInput"></a>

```go
func TypeConverterInput() interface{}
```

- *Type:* interface{}

---

##### `UpperCaseStringInput`<sup>Optional</sup> <a name="UpperCaseStringInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.upperCaseStringInput"></a>

```go
func UpperCaseStringInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigParseCloudfrontList <a name="CloudwatchLogTransformerTransformerConfigParseCloudfrontList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigParseCloudfrontList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigParseCloudfrontList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference <a name="CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigParseJsonList <a name="CloudwatchLogTransformerTransformerConfigParseJsonList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigParseJsonList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigParseJsonList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigParseJsonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigParseJsonOutputReference <a name="CloudwatchLogTransformerTransformerConfigParseJsonOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigParseJsonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigParseJsonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseJsonOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigParseKeyValueList <a name="CloudwatchLogTransformerTransformerConfigParseKeyValueList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigParseKeyValueList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigParseKeyValueList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference <a name="CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.resetKeyPrefix">ResetKeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.resetKeyValueDelimiter">ResetKeyValueDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.resetNonMatchValue">ResetNonMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.resetOverwriteIfExists">ResetOverwriteIfExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.resetFieldDelimiter"></a>

```go
func ResetFieldDelimiter()
```

##### `ResetKeyPrefix` <a name="ResetKeyPrefix" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.resetKeyPrefix"></a>

```go
func ResetKeyPrefix()
```

##### `ResetKeyValueDelimiter` <a name="ResetKeyValueDelimiter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.resetKeyValueDelimiter"></a>

```go
func ResetKeyValueDelimiter()
```

##### `ResetNonMatchValue` <a name="ResetNonMatchValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.resetNonMatchValue"></a>

```go
func ResetNonMatchValue()
```

##### `ResetOverwriteIfExists` <a name="ResetOverwriteIfExists" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.resetOverwriteIfExists"></a>

```go
func ResetOverwriteIfExists()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.keyPrefixInput">KeyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.keyValueDelimiterInput">KeyValueDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.nonMatchValueInput">NonMatchValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.overwriteIfExistsInput">OverwriteIfExistsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.keyPrefix">KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.keyValueDelimiter">KeyValueDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.nonMatchValue">NonMatchValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.overwriteIfExists">OverwriteIfExists</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.fieldDelimiterInput"></a>

```go
func FieldDelimiterInput() *string
```

- *Type:* *string

---

##### `KeyPrefixInput`<sup>Optional</sup> <a name="KeyPrefixInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.keyPrefixInput"></a>

```go
func KeyPrefixInput() *string
```

- *Type:* *string

---

##### `KeyValueDelimiterInput`<sup>Optional</sup> <a name="KeyValueDelimiterInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.keyValueDelimiterInput"></a>

```go
func KeyValueDelimiterInput() *string
```

- *Type:* *string

---

##### `NonMatchValueInput`<sup>Optional</sup> <a name="NonMatchValueInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.nonMatchValueInput"></a>

```go
func NonMatchValueInput() *string
```

- *Type:* *string

---

##### `OverwriteIfExistsInput`<sup>Optional</sup> <a name="OverwriteIfExistsInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.overwriteIfExistsInput"></a>

```go
func OverwriteIfExistsInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.fieldDelimiter"></a>

```go
func FieldDelimiter() *string
```

- *Type:* *string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.keyPrefix"></a>

```go
func KeyPrefix() *string
```

- *Type:* *string

---

##### `KeyValueDelimiter`<sup>Required</sup> <a name="KeyValueDelimiter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.keyValueDelimiter"></a>

```go
func KeyValueDelimiter() *string
```

- *Type:* *string

---

##### `NonMatchValue`<sup>Required</sup> <a name="NonMatchValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.nonMatchValue"></a>

```go
func NonMatchValue() *string
```

- *Type:* *string

---

##### `OverwriteIfExists`<sup>Required</sup> <a name="OverwriteIfExists" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.overwriteIfExists"></a>

```go
func OverwriteIfExists() interface{}
```

- *Type:* interface{}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigParsePostgresList <a name="CloudwatchLogTransformerTransformerConfigParsePostgresList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigParsePostgresList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigParsePostgresList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference <a name="CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigParsePostgresOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigParseRoute53List <a name="CloudwatchLogTransformerTransformerConfigParseRoute53List" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigParseRoute53List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigParseRoute53List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53List.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference <a name="CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigParseRoute53OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigParseToOcsfList <a name="CloudwatchLogTransformerTransformerConfigParseToOcsfList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigParseToOcsfList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigParseToOcsfList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference <a name="CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.property.eventSourceInput">EventSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.property.ocsfVersionInput">OcsfVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.property.eventSource">EventSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.property.ocsfVersion">OcsfVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventSourceInput`<sup>Optional</sup> <a name="EventSourceInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.property.eventSourceInput"></a>

```go
func EventSourceInput() *string
```

- *Type:* *string

---

##### `OcsfVersionInput`<sup>Optional</sup> <a name="OcsfVersionInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.property.ocsfVersionInput"></a>

```go
func OcsfVersionInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `EventSource`<sup>Required</sup> <a name="EventSource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.property.eventSource"></a>

```go
func EventSource() *string
```

- *Type:* *string

---

##### `OcsfVersion`<sup>Required</sup> <a name="OcsfVersion" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.property.ocsfVersion"></a>

```go
func OcsfVersion() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigParseVpcList <a name="CloudwatchLogTransformerTransformerConfigParseVpcList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigParseVpcList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigParseVpcList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigParseVpcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigParseVpcOutputReference <a name="CloudwatchLogTransformerTransformerConfigParseVpcOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigParseVpcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigParseVpcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseVpcOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigParseWafList <a name="CloudwatchLogTransformerTransformerConfigParseWafList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigParseWafList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigParseWafList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigParseWafOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigParseWafOutputReference <a name="CloudwatchLogTransformerTransformerConfigParseWafOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigParseWafOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigParseWafOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigParseWafOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigRenameKeysEntryList <a name="CloudwatchLogTransformerTransformerConfigRenameKeysEntryList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigRenameKeysEntryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigRenameKeysEntryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference <a name="CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.resetOverwriteIfExists">ResetOverwriteIfExists</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOverwriteIfExists` <a name="ResetOverwriteIfExists" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.resetOverwriteIfExists"></a>

```go
func ResetOverwriteIfExists()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.property.overwriteIfExistsInput">OverwriteIfExistsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.property.renameToInput">RenameToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.property.overwriteIfExists">OverwriteIfExists</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.property.renameTo">RenameTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `OverwriteIfExistsInput`<sup>Optional</sup> <a name="OverwriteIfExistsInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.property.overwriteIfExistsInput"></a>

```go
func OverwriteIfExistsInput() interface{}
```

- *Type:* interface{}

---

##### `RenameToInput`<sup>Optional</sup> <a name="RenameToInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.property.renameToInput"></a>

```go
func RenameToInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `OverwriteIfExists`<sup>Required</sup> <a name="OverwriteIfExists" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.property.overwriteIfExists"></a>

```go
func OverwriteIfExists() interface{}
```

- *Type:* interface{}

---

##### `RenameTo`<sup>Required</sup> <a name="RenameTo" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.property.renameTo"></a>

```go
func RenameTo() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigRenameKeysList <a name="CloudwatchLogTransformerTransformerConfigRenameKeysList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigRenameKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigRenameKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference <a name="CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigRenameKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.putEntry">PutEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.resetEntry">ResetEntry</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEntry` <a name="PutEntry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.putEntry"></a>

```go
func PutEntry(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.putEntry.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEntry` <a name="ResetEntry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.resetEntry"></a>

```go
func ResetEntry()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.property.entry">Entry</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList">CloudwatchLogTransformerTransformerConfigRenameKeysEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.property.entryInput">EntryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Entry`<sup>Required</sup> <a name="Entry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.property.entry"></a>

```go
func Entry() CloudwatchLogTransformerTransformerConfigRenameKeysEntryList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysEntryList">CloudwatchLogTransformerTransformerConfigRenameKeysEntryList</a>

---

##### `EntryInput`<sup>Optional</sup> <a name="EntryInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.property.entryInput"></a>

```go
func EntryInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigSplitStringEntryList <a name="CloudwatchLogTransformerTransformerConfigSplitStringEntryList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigSplitStringEntryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigSplitStringEntryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference <a name="CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.property.delimiterInput"></a>

```go
func DelimiterInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigSplitStringList <a name="CloudwatchLogTransformerTransformerConfigSplitStringList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigSplitStringList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigSplitStringList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigSplitStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigSplitStringOutputReference <a name="CloudwatchLogTransformerTransformerConfigSplitStringOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigSplitStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigSplitStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.putEntry">PutEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.resetEntry">ResetEntry</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEntry` <a name="PutEntry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.putEntry"></a>

```go
func PutEntry(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.putEntry.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEntry` <a name="ResetEntry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.resetEntry"></a>

```go
func ResetEntry()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.property.entry">Entry</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList">CloudwatchLogTransformerTransformerConfigSplitStringEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.property.entryInput">EntryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Entry`<sup>Required</sup> <a name="Entry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.property.entry"></a>

```go
func Entry() CloudwatchLogTransformerTransformerConfigSplitStringEntryList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringEntryList">CloudwatchLogTransformerTransformerConfigSplitStringEntryList</a>

---

##### `EntryInput`<sup>Optional</sup> <a name="EntryInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.property.entryInput"></a>

```go
func EntryInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSplitStringOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList <a name="CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigSubstituteStringEntryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference <a name="CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.property.toInput">ToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.property.to">To</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.property.toInput"></a>

```go
func ToInput() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.property.to"></a>

```go
func To() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigSubstituteStringList <a name="CloudwatchLogTransformerTransformerConfigSubstituteStringList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigSubstituteStringList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigSubstituteStringList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference <a name="CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.putEntry">PutEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.resetEntry">ResetEntry</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEntry` <a name="PutEntry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.putEntry"></a>

```go
func PutEntry(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.putEntry.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEntry` <a name="ResetEntry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.resetEntry"></a>

```go
func ResetEntry()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.property.entry">Entry</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList">CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.property.entryInput">EntryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Entry`<sup>Required</sup> <a name="Entry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.property.entry"></a>

```go
func Entry() CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList">CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList</a>

---

##### `EntryInput`<sup>Optional</sup> <a name="EntryInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.property.entryInput"></a>

```go
func EntryInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigTrimStringList <a name="CloudwatchLogTransformerTransformerConfigTrimStringList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigTrimStringList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigTrimStringList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigTrimStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigTrimStringOutputReference <a name="CloudwatchLogTransformerTransformerConfigTrimStringOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigTrimStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigTrimStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.property.withKeysInput">WithKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.property.withKeys">WithKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WithKeysInput`<sup>Optional</sup> <a name="WithKeysInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.property.withKeysInput"></a>

```go
func WithKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `WithKeys`<sup>Required</sup> <a name="WithKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.property.withKeys"></a>

```go
func WithKeys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTrimStringOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigTypeConverterEntryList <a name="CloudwatchLogTransformerTransformerConfigTypeConverterEntryList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigTypeConverterEntryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigTypeConverterEntryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference <a name="CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigTypeConverterList <a name="CloudwatchLogTransformerTransformerConfigTypeConverterList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigTypeConverterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigTypeConverterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference <a name="CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigTypeConverterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.putEntry">PutEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.resetEntry">ResetEntry</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEntry` <a name="PutEntry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.putEntry"></a>

```go
func PutEntry(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.putEntry.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEntry` <a name="ResetEntry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.resetEntry"></a>

```go
func ResetEntry()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.property.entry">Entry</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList">CloudwatchLogTransformerTransformerConfigTypeConverterEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.property.entryInput">EntryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Entry`<sup>Required</sup> <a name="Entry" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.property.entry"></a>

```go
func Entry() CloudwatchLogTransformerTransformerConfigTypeConverterEntryList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterEntryList">CloudwatchLogTransformerTransformerConfigTypeConverterEntryList</a>

---

##### `EntryInput`<sup>Optional</sup> <a name="EntryInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.property.entryInput"></a>

```go
func EntryInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigUpperCaseStringList <a name="CloudwatchLogTransformerTransformerConfigUpperCaseStringList" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigUpperCaseStringList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogTransformerTransformerConfigUpperCaseStringList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.get"></a>

```go
func Get(index *f64) CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference <a name="CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchlogtransformer"

cloudwatchlogtransformer.NewCloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.property.withKeysInput">WithKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.property.withKeys">WithKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WithKeysInput`<sup>Optional</sup> <a name="WithKeysInput" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.property.withKeysInput"></a>

```go
func WithKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `WithKeys`<sup>Required</sup> <a name="WithKeys" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.property.withKeys"></a>

```go
func WithKeys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchLogTransformer.CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



