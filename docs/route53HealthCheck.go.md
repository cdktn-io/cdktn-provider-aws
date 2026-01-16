# `route53HealthCheck` Submodule <a name="`route53HealthCheck` Submodule" id="@cdktn/provider-aws.route53HealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53HealthCheck <a name="Route53HealthCheck" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check aws_route53_health_check}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/route53healthcheck"

route53healthcheck.NewRoute53HealthCheck(scope Construct, id *string, config Route53HealthCheckConfig) Route53HealthCheck
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig">Route53HealthCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig">Route53HealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetChildHealthchecks">ResetChildHealthchecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetChildHealthThreshold">ResetChildHealthThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetCloudwatchAlarmName">ResetCloudwatchAlarmName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetCloudwatchAlarmRegion">ResetCloudwatchAlarmRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetEnableSni">ResetEnableSni</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetFqdn">ResetFqdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetInsufficientDataHealthStatus">ResetInsufficientDataHealthStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetInvertHealthcheck">ResetInvertHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetMeasureLatency">ResetMeasureLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetReferenceName">ResetReferenceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetRequestInterval">ResetRequestInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetResourcePath">ResetResourcePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetRoutingControlArn">ResetRoutingControlArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetSearchString">ResetSearchString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetTriggers">ResetTriggers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetChildHealthchecks` <a name="ResetChildHealthchecks" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetChildHealthchecks"></a>

```go
func ResetChildHealthchecks()
```

##### `ResetChildHealthThreshold` <a name="ResetChildHealthThreshold" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetChildHealthThreshold"></a>

```go
func ResetChildHealthThreshold()
```

##### `ResetCloudwatchAlarmName` <a name="ResetCloudwatchAlarmName" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetCloudwatchAlarmName"></a>

```go
func ResetCloudwatchAlarmName()
```

##### `ResetCloudwatchAlarmRegion` <a name="ResetCloudwatchAlarmRegion" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetCloudwatchAlarmRegion"></a>

```go
func ResetCloudwatchAlarmRegion()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetEnableSni` <a name="ResetEnableSni" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetEnableSni"></a>

```go
func ResetEnableSni()
```

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetFailureThreshold"></a>

```go
func ResetFailureThreshold()
```

##### `ResetFqdn` <a name="ResetFqdn" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetFqdn"></a>

```go
func ResetFqdn()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetId"></a>

```go
func ResetId()
```

##### `ResetInsufficientDataHealthStatus` <a name="ResetInsufficientDataHealthStatus" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetInsufficientDataHealthStatus"></a>

```go
func ResetInsufficientDataHealthStatus()
```

##### `ResetInvertHealthcheck` <a name="ResetInvertHealthcheck" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetInvertHealthcheck"></a>

```go
func ResetInvertHealthcheck()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetMeasureLatency` <a name="ResetMeasureLatency" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetMeasureLatency"></a>

```go
func ResetMeasureLatency()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetPort"></a>

```go
func ResetPort()
```

##### `ResetReferenceName` <a name="ResetReferenceName" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetReferenceName"></a>

```go
func ResetReferenceName()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetRegions"></a>

```go
func ResetRegions()
```

##### `ResetRequestInterval` <a name="ResetRequestInterval" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetRequestInterval"></a>

```go
func ResetRequestInterval()
```

##### `ResetResourcePath` <a name="ResetResourcePath" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetResourcePath"></a>

```go
func ResetResourcePath()
```

##### `ResetRoutingControlArn` <a name="ResetRoutingControlArn" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetRoutingControlArn"></a>

```go
func ResetRoutingControlArn()
```

##### `ResetSearchString` <a name="ResetSearchString" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetSearchString"></a>

```go
func ResetSearchString()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTriggers` <a name="ResetTriggers" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.resetTriggers"></a>

```go
func ResetTriggers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Route53HealthCheck resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/route53healthcheck"

route53healthcheck.Route53HealthCheck_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/route53healthcheck"

route53healthcheck.Route53HealthCheck_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/route53healthcheck"

route53healthcheck.Route53HealthCheck_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/route53healthcheck"

route53healthcheck.Route53HealthCheck_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Route53HealthCheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Route53HealthCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Route53HealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Route53HealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthchecksInput">ChildHealthchecksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthThresholdInput">ChildHealthThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmNameInput">CloudwatchAlarmNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmRegionInput">CloudwatchAlarmRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.enableSniInput">EnableSniInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqdnInput">FqdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.insufficientDataHealthStatusInput">InsufficientDataHealthStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.invertHealthcheckInput">InvertHealthcheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.measureLatencyInput">MeasureLatencyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.referenceNameInput">ReferenceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.requestIntervalInput">RequestIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.resourcePathInput">ResourcePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.routingControlArnInput">RoutingControlArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.searchStringInput">SearchStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.triggersInput">TriggersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthchecks">ChildHealthchecks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthThreshold">ChildHealthThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmName">CloudwatchAlarmName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmRegion">CloudwatchAlarmRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.enableSni">EnableSni</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.insufficientDataHealthStatus">InsufficientDataHealthStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.invertHealthcheck">InvertHealthcheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.measureLatency">MeasureLatency</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.referenceName">ReferenceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.requestInterval">RequestInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.resourcePath">ResourcePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.routingControlArn">RoutingControlArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.searchString">SearchString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.triggers">Triggers</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ChildHealthchecksInput`<sup>Optional</sup> <a name="ChildHealthchecksInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthchecksInput"></a>

```go
func ChildHealthchecksInput() *[]*string
```

- *Type:* *[]*string

---

##### `ChildHealthThresholdInput`<sup>Optional</sup> <a name="ChildHealthThresholdInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthThresholdInput"></a>

```go
func ChildHealthThresholdInput() *f64
```

- *Type:* *f64

---

##### `CloudwatchAlarmNameInput`<sup>Optional</sup> <a name="CloudwatchAlarmNameInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmNameInput"></a>

```go
func CloudwatchAlarmNameInput() *string
```

- *Type:* *string

---

##### `CloudwatchAlarmRegionInput`<sup>Optional</sup> <a name="CloudwatchAlarmRegionInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmRegionInput"></a>

```go
func CloudwatchAlarmRegionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSniInput`<sup>Optional</sup> <a name="EnableSniInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.enableSniInput"></a>

```go
func EnableSniInput() interface{}
```

- *Type:* interface{}

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.failureThresholdInput"></a>

```go
func FailureThresholdInput() *f64
```

- *Type:* *f64

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqdnInput"></a>

```go
func FqdnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InsufficientDataHealthStatusInput`<sup>Optional</sup> <a name="InsufficientDataHealthStatusInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.insufficientDataHealthStatusInput"></a>

```go
func InsufficientDataHealthStatusInput() *string
```

- *Type:* *string

---

##### `InvertHealthcheckInput`<sup>Optional</sup> <a name="InvertHealthcheckInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.invertHealthcheckInput"></a>

```go
func InvertHealthcheckInput() interface{}
```

- *Type:* interface{}

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `MeasureLatencyInput`<sup>Optional</sup> <a name="MeasureLatencyInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.measureLatencyInput"></a>

```go
func MeasureLatencyInput() interface{}
```

- *Type:* interface{}

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ReferenceNameInput`<sup>Optional</sup> <a name="ReferenceNameInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.referenceNameInput"></a>

```go
func ReferenceNameInput() *string
```

- *Type:* *string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequestIntervalInput`<sup>Optional</sup> <a name="RequestIntervalInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.requestIntervalInput"></a>

```go
func RequestIntervalInput() *f64
```

- *Type:* *f64

---

##### `ResourcePathInput`<sup>Optional</sup> <a name="ResourcePathInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.resourcePathInput"></a>

```go
func ResourcePathInput() *string
```

- *Type:* *string

---

##### `RoutingControlArnInput`<sup>Optional</sup> <a name="RoutingControlArnInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.routingControlArnInput"></a>

```go
func RoutingControlArnInput() *string
```

- *Type:* *string

---

##### `SearchStringInput`<sup>Optional</sup> <a name="SearchStringInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.searchStringInput"></a>

```go
func SearchStringInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TriggersInput`<sup>Optional</sup> <a name="TriggersInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.triggersInput"></a>

```go
func TriggersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ChildHealthchecks`<sup>Required</sup> <a name="ChildHealthchecks" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthchecks"></a>

```go
func ChildHealthchecks() *[]*string
```

- *Type:* *[]*string

---

##### `ChildHealthThreshold`<sup>Required</sup> <a name="ChildHealthThreshold" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthThreshold"></a>

```go
func ChildHealthThreshold() *f64
```

- *Type:* *f64

---

##### `CloudwatchAlarmName`<sup>Required</sup> <a name="CloudwatchAlarmName" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmName"></a>

```go
func CloudwatchAlarmName() *string
```

- *Type:* *string

---

##### `CloudwatchAlarmRegion`<sup>Required</sup> <a name="CloudwatchAlarmRegion" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmRegion"></a>

```go
func CloudwatchAlarmRegion() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `EnableSni`<sup>Required</sup> <a name="EnableSni" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.enableSni"></a>

```go
func EnableSni() interface{}
```

- *Type:* interface{}

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InsufficientDataHealthStatus`<sup>Required</sup> <a name="InsufficientDataHealthStatus" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.insufficientDataHealthStatus"></a>

```go
func InsufficientDataHealthStatus() *string
```

- *Type:* *string

---

##### `InvertHealthcheck`<sup>Required</sup> <a name="InvertHealthcheck" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.invertHealthcheck"></a>

```go
func InvertHealthcheck() interface{}
```

- *Type:* interface{}

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `MeasureLatency`<sup>Required</sup> <a name="MeasureLatency" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.measureLatency"></a>

```go
func MeasureLatency() interface{}
```

- *Type:* interface{}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ReferenceName`<sup>Required</sup> <a name="ReferenceName" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.referenceName"></a>

```go
func ReferenceName() *string
```

- *Type:* *string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `RequestInterval`<sup>Required</sup> <a name="RequestInterval" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.requestInterval"></a>

```go
func RequestInterval() *f64
```

- *Type:* *f64

---

##### `ResourcePath`<sup>Required</sup> <a name="ResourcePath" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.resourcePath"></a>

```go
func ResourcePath() *string
```

- *Type:* *string

---

##### `RoutingControlArn`<sup>Required</sup> <a name="RoutingControlArn" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.routingControlArn"></a>

```go
func RoutingControlArn() *string
```

- *Type:* *string

---

##### `SearchString`<sup>Required</sup> <a name="SearchString" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.searchString"></a>

```go
func SearchString() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.triggers"></a>

```go
func Triggers() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheck.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53HealthCheckConfig <a name="Route53HealthCheckConfig" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/route53healthcheck"

&route53healthcheck.Route53HealthCheckConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Type: *string,
	ChildHealthchecks: *[]*string,
	ChildHealthThreshold: *f64,
	CloudwatchAlarmName: *string,
	CloudwatchAlarmRegion: *string,
	Disabled: interface{},
	EnableSni: interface{},
	FailureThreshold: *f64,
	Fqdn: *string,
	Id: *string,
	InsufficientDataHealthStatus: *string,
	InvertHealthcheck: interface{},
	IpAddress: *string,
	MeasureLatency: interface{},
	Port: *f64,
	ReferenceName: *string,
	Regions: *[]*string,
	RequestInterval: *f64,
	ResourcePath: *string,
	RoutingControlArn: *string,
	SearchString: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Triggers: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#type Route53HealthCheck#type}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.childHealthchecks">ChildHealthchecks</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#child_healthchecks Route53HealthCheck#child_healthchecks}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.childHealthThreshold">ChildHealthThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#child_health_threshold Route53HealthCheck#child_health_threshold}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.cloudwatchAlarmName">CloudwatchAlarmName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#cloudwatch_alarm_name Route53HealthCheck#cloudwatch_alarm_name}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.cloudwatchAlarmRegion">CloudwatchAlarmRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#cloudwatch_alarm_region Route53HealthCheck#cloudwatch_alarm_region}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#disabled Route53HealthCheck#disabled}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.enableSni">EnableSni</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#enable_sni Route53HealthCheck#enable_sni}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.fqdn">Fqdn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#fqdn Route53HealthCheck#fqdn}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#id Route53HealthCheck#id}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.insufficientDataHealthStatus">InsufficientDataHealthStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.invertHealthcheck">InvertHealthcheck</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#invert_healthcheck Route53HealthCheck#invert_healthcheck}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.ipAddress">IpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#ip_address Route53HealthCheck#ip_address}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.measureLatency">MeasureLatency</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#measure_latency Route53HealthCheck#measure_latency}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#port Route53HealthCheck#port}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.referenceName">ReferenceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#reference_name Route53HealthCheck#reference_name}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.regions">Regions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#regions Route53HealthCheck#regions}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.requestInterval">RequestInterval</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#request_interval Route53HealthCheck#request_interval}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.resourcePath">ResourcePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#resource_path Route53HealthCheck#resource_path}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.routingControlArn">RoutingControlArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.searchString">SearchString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#search_string Route53HealthCheck#search_string}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#tags Route53HealthCheck#tags}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#tags_all Route53HealthCheck#tags_all}. |
| <code><a href="#@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.triggers">Triggers</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#triggers Route53HealthCheck#triggers}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#type Route53HealthCheck#type}.

---

##### `ChildHealthchecks`<sup>Optional</sup> <a name="ChildHealthchecks" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.childHealthchecks"></a>

```go
ChildHealthchecks *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#child_healthchecks Route53HealthCheck#child_healthchecks}.

---

##### `ChildHealthThreshold`<sup>Optional</sup> <a name="ChildHealthThreshold" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.childHealthThreshold"></a>

```go
ChildHealthThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#child_health_threshold Route53HealthCheck#child_health_threshold}.

---

##### `CloudwatchAlarmName`<sup>Optional</sup> <a name="CloudwatchAlarmName" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.cloudwatchAlarmName"></a>

```go
CloudwatchAlarmName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#cloudwatch_alarm_name Route53HealthCheck#cloudwatch_alarm_name}.

---

##### `CloudwatchAlarmRegion`<sup>Optional</sup> <a name="CloudwatchAlarmRegion" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.cloudwatchAlarmRegion"></a>

```go
CloudwatchAlarmRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#cloudwatch_alarm_region Route53HealthCheck#cloudwatch_alarm_region}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#disabled Route53HealthCheck#disabled}.

---

##### `EnableSni`<sup>Optional</sup> <a name="EnableSni" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.enableSni"></a>

```go
EnableSni interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#enable_sni Route53HealthCheck#enable_sni}.

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.failureThreshold"></a>

```go
FailureThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}.

---

##### `Fqdn`<sup>Optional</sup> <a name="Fqdn" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.fqdn"></a>

```go
Fqdn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#fqdn Route53HealthCheck#fqdn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#id Route53HealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InsufficientDataHealthStatus`<sup>Optional</sup> <a name="InsufficientDataHealthStatus" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.insufficientDataHealthStatus"></a>

```go
InsufficientDataHealthStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}.

---

##### `InvertHealthcheck`<sup>Optional</sup> <a name="InvertHealthcheck" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.invertHealthcheck"></a>

```go
InvertHealthcheck interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#invert_healthcheck Route53HealthCheck#invert_healthcheck}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#ip_address Route53HealthCheck#ip_address}.

---

##### `MeasureLatency`<sup>Optional</sup> <a name="MeasureLatency" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.measureLatency"></a>

```go
MeasureLatency interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#measure_latency Route53HealthCheck#measure_latency}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#port Route53HealthCheck#port}.

---

##### `ReferenceName`<sup>Optional</sup> <a name="ReferenceName" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.referenceName"></a>

```go
ReferenceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#reference_name Route53HealthCheck#reference_name}.

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#regions Route53HealthCheck#regions}.

---

##### `RequestInterval`<sup>Optional</sup> <a name="RequestInterval" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.requestInterval"></a>

```go
RequestInterval *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#request_interval Route53HealthCheck#request_interval}.

---

##### `ResourcePath`<sup>Optional</sup> <a name="ResourcePath" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.resourcePath"></a>

```go
ResourcePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#resource_path Route53HealthCheck#resource_path}.

---

##### `RoutingControlArn`<sup>Optional</sup> <a name="RoutingControlArn" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.routingControlArn"></a>

```go
RoutingControlArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}.

---

##### `SearchString`<sup>Optional</sup> <a name="SearchString" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.searchString"></a>

```go
SearchString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#search_string Route53HealthCheck#search_string}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#tags Route53HealthCheck#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#tags_all Route53HealthCheck#tags_all}.

---

##### `Triggers`<sup>Optional</sup> <a name="Triggers" id="@cdktn/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.triggers"></a>

```go
Triggers *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_health_check#triggers Route53HealthCheck#triggers}.

---



