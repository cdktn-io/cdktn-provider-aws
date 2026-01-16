# `route53ResolverEndpoint` Submodule <a name="`route53ResolverEndpoint` Submodule" id="@cdktn/provider-aws.route53ResolverEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverEndpoint <a name="Route53ResolverEndpoint" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint aws_route53_resolver_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/route53resolverendpoint"

route53resolverendpoint.NewRoute53ResolverEndpoint(scope Construct, id *string, config Route53ResolverEndpointConfig) Route53ResolverEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig">Route53ResolverEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig">Route53ResolverEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.putIpAddress">PutIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.resetResolverEndpointType">ResetResolverEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.resetRniEnhancedMetricsEnabled">ResetRniEnhancedMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.resetTargetNameServerMetricsEnabled">ResetTargetNameServerMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIpAddress` <a name="PutIpAddress" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.putIpAddress"></a>

```go
func PutIpAddress(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.putIpAddress.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value Route53ResolverEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeouts">Route53ResolverEndpointTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.resetName"></a>

```go
func ResetName()
```

##### `ResetProtocols` <a name="ResetProtocols" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.resetProtocols"></a>

```go
func ResetProtocols()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetResolverEndpointType` <a name="ResetResolverEndpointType" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.resetResolverEndpointType"></a>

```go
func ResetResolverEndpointType()
```

##### `ResetRniEnhancedMetricsEnabled` <a name="ResetRniEnhancedMetricsEnabled" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.resetRniEnhancedMetricsEnabled"></a>

```go
func ResetRniEnhancedMetricsEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTargetNameServerMetricsEnabled` <a name="ResetTargetNameServerMetricsEnabled" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.resetTargetNameServerMetricsEnabled"></a>

```go
func ResetTargetNameServerMetricsEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Route53ResolverEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/route53resolverendpoint"

route53resolverendpoint.Route53ResolverEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/route53resolverendpoint"

route53resolverendpoint.Route53ResolverEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/route53resolverendpoint"

route53resolverendpoint.Route53ResolverEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/route53resolverendpoint"

route53resolverendpoint.Route53ResolverEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Route53ResolverEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Route53ResolverEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Route53ResolverEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Route53ResolverEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.hostVpcId">HostVpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.ipAddress">IpAddress</a></code> | <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList">Route53ResolverEndpointIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference">Route53ResolverEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.ipAddressInput">IpAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.protocolsInput">ProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.resolverEndpointTypeInput">ResolverEndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.rniEnhancedMetricsEnabledInput">RniEnhancedMetricsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.targetNameServerMetricsEnabledInput">TargetNameServerMetricsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.resolverEndpointType">ResolverEndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.rniEnhancedMetricsEnabled">RniEnhancedMetricsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.targetNameServerMetricsEnabled">TargetNameServerMetricsEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `HostVpcId`<sup>Required</sup> <a name="HostVpcId" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.hostVpcId"></a>

```go
func HostVpcId() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.ipAddress"></a>

```go
func IpAddress() Route53ResolverEndpointIpAddressList
```

- *Type:* <a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList">Route53ResolverEndpointIpAddressList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.timeouts"></a>

```go
func Timeouts() Route53ResolverEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference">Route53ResolverEndpointTimeoutsOutputReference</a>

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.ipAddressInput"></a>

```go
func IpAddressInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.protocolsInput"></a>

```go
func ProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResolverEndpointTypeInput`<sup>Optional</sup> <a name="ResolverEndpointTypeInput" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.resolverEndpointTypeInput"></a>

```go
func ResolverEndpointTypeInput() *string
```

- *Type:* *string

---

##### `RniEnhancedMetricsEnabledInput`<sup>Optional</sup> <a name="RniEnhancedMetricsEnabledInput" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.rniEnhancedMetricsEnabledInput"></a>

```go
func RniEnhancedMetricsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetNameServerMetricsEnabledInput`<sup>Optional</sup> <a name="TargetNameServerMetricsEnabledInput" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.targetNameServerMetricsEnabledInput"></a>

```go
func TargetNameServerMetricsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResolverEndpointType`<sup>Required</sup> <a name="ResolverEndpointType" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.resolverEndpointType"></a>

```go
func ResolverEndpointType() *string
```

- *Type:* *string

---

##### `RniEnhancedMetricsEnabled`<sup>Required</sup> <a name="RniEnhancedMetricsEnabled" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.rniEnhancedMetricsEnabled"></a>

```go
func RniEnhancedMetricsEnabled() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetNameServerMetricsEnabled`<sup>Required</sup> <a name="TargetNameServerMetricsEnabled" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.targetNameServerMetricsEnabled"></a>

```go
func TargetNameServerMetricsEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverEndpointConfig <a name="Route53ResolverEndpointConfig" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/route53resolverendpoint"

&route53resolverendpoint.Route53ResolverEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Direction: *string,
	IpAddress: interface{},
	SecurityGroupIds: *[]*string,
	Id: *string,
	Name: *string,
	Protocols: *[]*string,
	Region: *string,
	ResolverEndpointType: *string,
	RniEnhancedMetricsEnabled: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TargetNameServerMetricsEnabled: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws.route53ResolverEndpoint.Route53ResolverEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.direction">Direction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#direction Route53ResolverEndpoint#direction}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.ipAddress">IpAddress</a></code> | <code>interface{}</code> | ip_address block. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#security_group_ids Route53ResolverEndpoint#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#id Route53ResolverEndpoint#id}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#name Route53ResolverEndpoint#name}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.protocols">Protocols</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#protocols Route53ResolverEndpoint#protocols}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.resolverEndpointType">ResolverEndpointType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#resolver_endpoint_type Route53ResolverEndpoint#resolver_endpoint_type}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.rniEnhancedMetricsEnabled">RniEnhancedMetricsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#rni_enhanced_metrics_enabled Route53ResolverEndpoint#rni_enhanced_metrics_enabled}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#tags Route53ResolverEndpoint#tags}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#tags_all Route53ResolverEndpoint#tags_all}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.targetNameServerMetricsEnabled">TargetNameServerMetricsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#target_name_server_metrics_enabled Route53ResolverEndpoint#target_name_server_metrics_enabled}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeouts">Route53ResolverEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#direction Route53ResolverEndpoint#direction}.

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.ipAddress"></a>

```go
IpAddress interface{}
```

- *Type:* interface{}

ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#ip_address Route53ResolverEndpoint#ip_address}

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#security_group_ids Route53ResolverEndpoint#security_group_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#id Route53ResolverEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#name Route53ResolverEndpoint#name}.

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.protocols"></a>

```go
Protocols *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#protocols Route53ResolverEndpoint#protocols}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#region Route53ResolverEndpoint#region}

---

##### `ResolverEndpointType`<sup>Optional</sup> <a name="ResolverEndpointType" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.resolverEndpointType"></a>

```go
ResolverEndpointType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#resolver_endpoint_type Route53ResolverEndpoint#resolver_endpoint_type}.

---

##### `RniEnhancedMetricsEnabled`<sup>Optional</sup> <a name="RniEnhancedMetricsEnabled" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.rniEnhancedMetricsEnabled"></a>

```go
RniEnhancedMetricsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#rni_enhanced_metrics_enabled Route53ResolverEndpoint#rni_enhanced_metrics_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#tags Route53ResolverEndpoint#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#tags_all Route53ResolverEndpoint#tags_all}.

---

##### `TargetNameServerMetricsEnabled`<sup>Optional</sup> <a name="TargetNameServerMetricsEnabled" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.targetNameServerMetricsEnabled"></a>

```go
TargetNameServerMetricsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#target_name_server_metrics_enabled Route53ResolverEndpoint#target_name_server_metrics_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointConfig.property.timeouts"></a>

```go
Timeouts Route53ResolverEndpointTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeouts">Route53ResolverEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#timeouts Route53ResolverEndpoint#timeouts}

---

### Route53ResolverEndpointIpAddress <a name="Route53ResolverEndpointIpAddress" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/route53resolverendpoint"

&route53resolverendpoint.Route53ResolverEndpointIpAddress {
	SubnetId: *string,
	Ip: *string,
	Ipv6: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddress.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#subnet_id Route53ResolverEndpoint#subnet_id}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddress.property.ip">Ip</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#ip Route53ResolverEndpoint#ip}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddress.property.ipv6">Ipv6</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#ipv6 Route53ResolverEndpoint#ipv6}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddress.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#subnet_id Route53ResolverEndpoint#subnet_id}.

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddress.property.ip"></a>

```go
Ip *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#ip Route53ResolverEndpoint#ip}.

---

##### `Ipv6`<sup>Optional</sup> <a name="Ipv6" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddress.property.ipv6"></a>

```go
Ipv6 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#ipv6 Route53ResolverEndpoint#ipv6}.

---

### Route53ResolverEndpointTimeouts <a name="Route53ResolverEndpointTimeouts" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/route53resolverendpoint"

&route53resolverendpoint.Route53ResolverEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#create Route53ResolverEndpoint#create}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#delete Route53ResolverEndpoint#delete}. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#update Route53ResolverEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#create Route53ResolverEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#delete Route53ResolverEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_endpoint#update Route53ResolverEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ResolverEndpointIpAddressList <a name="Route53ResolverEndpointIpAddressList" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/route53resolverendpoint"

route53resolverendpoint.NewRoute53ResolverEndpointIpAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53ResolverEndpointIpAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.get"></a>

```go
func Get(index *f64) Route53ResolverEndpointIpAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53ResolverEndpointIpAddressOutputReference <a name="Route53ResolverEndpointIpAddressOutputReference" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/route53resolverendpoint"

route53resolverendpoint.NewRoute53ResolverEndpointIpAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53ResolverEndpointIpAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.resetIpv6">ResetIpv6</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIp` <a name="ResetIp" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.resetIp"></a>

```go
func ResetIp()
```

##### `ResetIpv6` <a name="ResetIpv6" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.resetIpv6"></a>

```go
func ResetIpv6()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.property.ipId">IpId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.property.ipInput">IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.property.ipv6Input">Ipv6Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.property.ipv6">Ipv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpId`<sup>Required</sup> <a name="IpId" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.property.ipId"></a>

```go
func IpId() *string
```

- *Type:* *string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.property.ipInput"></a>

```go
func IpInput() *string
```

- *Type:* *string

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.property.ipv6Input"></a>

```go
func Ipv6Input() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.property.ipv6"></a>

```go
func Ipv6() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointIpAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53ResolverEndpointTimeoutsOutputReference <a name="Route53ResolverEndpointTimeoutsOutputReference" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/route53resolverendpoint"

route53resolverendpoint.NewRoute53ResolverEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53ResolverEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.route53ResolverEndpoint.Route53ResolverEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



