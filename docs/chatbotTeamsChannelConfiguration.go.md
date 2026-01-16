# `chatbotTeamsChannelConfiguration` Submodule <a name="`chatbotTeamsChannelConfiguration` Submodule" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChatbotTeamsChannelConfiguration <a name="ChatbotTeamsChannelConfiguration" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration aws_chatbot_teams_channel_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/chatbotteamschannelconfiguration"

chatbotteamschannelconfiguration.NewChatbotTeamsChannelConfiguration(scope Construct, id *string, config ChatbotTeamsChannelConfigurationConfig) ChatbotTeamsChannelConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig">ChatbotTeamsChannelConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig">ChatbotTeamsChannelConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetChannelName">ResetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetGuardrailPolicyArns">ResetGuardrailPolicyArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetLoggingLevel">ResetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetSnsTopicArns">ResetSnsTopicArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTeamName">ResetTeamName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetUserAuthorizationRequired">ResetUserAuthorizationRequired</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value ChatbotTeamsChannelConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a>

---

##### `ResetChannelName` <a name="ResetChannelName" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetChannelName"></a>

```go
func ResetChannelName()
```

##### `ResetGuardrailPolicyArns` <a name="ResetGuardrailPolicyArns" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetGuardrailPolicyArns"></a>

```go
func ResetGuardrailPolicyArns()
```

##### `ResetLoggingLevel` <a name="ResetLoggingLevel" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetLoggingLevel"></a>

```go
func ResetLoggingLevel()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSnsTopicArns` <a name="ResetSnsTopicArns" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetSnsTopicArns"></a>

```go
func ResetSnsTopicArns()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTeamName` <a name="ResetTeamName" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTeamName"></a>

```go
func ResetTeamName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserAuthorizationRequired` <a name="ResetUserAuthorizationRequired" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetUserAuthorizationRequired"></a>

```go
func ResetUserAuthorizationRequired()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ChatbotTeamsChannelConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/chatbotteamschannelconfiguration"

chatbotteamschannelconfiguration.ChatbotTeamsChannelConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/chatbotteamschannelconfiguration"

chatbotteamschannelconfiguration.ChatbotTeamsChannelConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/chatbotteamschannelconfiguration"

chatbotteamschannelconfiguration.ChatbotTeamsChannelConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/chatbotteamschannelconfiguration"

chatbotteamschannelconfiguration.ChatbotTeamsChannelConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ChatbotTeamsChannelConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ChatbotTeamsChannelConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ChatbotTeamsChannelConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ChatbotTeamsChannelConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.chatConfigurationArn">ChatConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference">ChatbotTeamsChannelConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelIdInput">ChannelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelNameInput">ChannelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.configurationNameInput">ConfigurationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.guardrailPolicyArnsInput">GuardrailPolicyArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.loggingLevelInput">LoggingLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.snsTopicArnsInput">SnsTopicArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamIdInput">TeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamNameInput">TeamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.userAuthorizationRequiredInput">UserAuthorizationRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelId">ChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.configurationName">ConfigurationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.guardrailPolicyArns">GuardrailPolicyArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.loggingLevel">LoggingLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.snsTopicArns">SnsTopicArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamName">TeamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.userAuthorizationRequired">UserAuthorizationRequired</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChatConfigurationArn`<sup>Required</sup> <a name="ChatConfigurationArn" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.chatConfigurationArn"></a>

```go
func ChatConfigurationArn() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.timeouts"></a>

```go
func Timeouts() ChatbotTeamsChannelConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference">ChatbotTeamsChannelConfigurationTimeoutsOutputReference</a>

---

##### `ChannelIdInput`<sup>Optional</sup> <a name="ChannelIdInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelIdInput"></a>

```go
func ChannelIdInput() *string
```

- *Type:* *string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelNameInput"></a>

```go
func ChannelNameInput() *string
```

- *Type:* *string

---

##### `ConfigurationNameInput`<sup>Optional</sup> <a name="ConfigurationNameInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.configurationNameInput"></a>

```go
func ConfigurationNameInput() *string
```

- *Type:* *string

---

##### `GuardrailPolicyArnsInput`<sup>Optional</sup> <a name="GuardrailPolicyArnsInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.guardrailPolicyArnsInput"></a>

```go
func GuardrailPolicyArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.iamRoleArnInput"></a>

```go
func IamRoleArnInput() *string
```

- *Type:* *string

---

##### `LoggingLevelInput`<sup>Optional</sup> <a name="LoggingLevelInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.loggingLevelInput"></a>

```go
func LoggingLevelInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SnsTopicArnsInput`<sup>Optional</sup> <a name="SnsTopicArnsInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.snsTopicArnsInput"></a>

```go
func SnsTopicArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamIdInput"></a>

```go
func TeamIdInput() *string
```

- *Type:* *string

---

##### `TeamNameInput`<sup>Optional</sup> <a name="TeamNameInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamNameInput"></a>

```go
func TeamNameInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserAuthorizationRequiredInput`<sup>Optional</sup> <a name="UserAuthorizationRequiredInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.userAuthorizationRequiredInput"></a>

```go
func UserAuthorizationRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelId"></a>

```go
func ChannelId() *string
```

- *Type:* *string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `ConfigurationName`<sup>Required</sup> <a name="ConfigurationName" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.configurationName"></a>

```go
func ConfigurationName() *string
```

- *Type:* *string

---

##### `GuardrailPolicyArns`<sup>Required</sup> <a name="GuardrailPolicyArns" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.guardrailPolicyArns"></a>

```go
func GuardrailPolicyArns() *[]*string
```

- *Type:* *[]*string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `LoggingLevel`<sup>Required</sup> <a name="LoggingLevel" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.loggingLevel"></a>

```go
func LoggingLevel() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SnsTopicArns`<sup>Required</sup> <a name="SnsTopicArns" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.snsTopicArns"></a>

```go
func SnsTopicArns() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

##### `TeamName`<sup>Required</sup> <a name="TeamName" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamName"></a>

```go
func TeamName() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `UserAuthorizationRequired`<sup>Required</sup> <a name="UserAuthorizationRequired" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.userAuthorizationRequired"></a>

```go
func UserAuthorizationRequired() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChatbotTeamsChannelConfigurationConfig <a name="ChatbotTeamsChannelConfigurationConfig" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/chatbotteamschannelconfiguration"

&chatbotteamschannelconfiguration.ChatbotTeamsChannelConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ChannelId: *string,
	ConfigurationName: *string,
	IamRoleArn: *string,
	TeamId: *string,
	TenantId: *string,
	ChannelName: *string,
	GuardrailPolicyArns: *[]*string,
	LoggingLevel: *string,
	Region: *string,
	SnsTopicArns: *[]*string,
	Tags: *map[string]*string,
	TeamName: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts,
	UserAuthorizationRequired: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.channelId">ChannelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#channel_id ChatbotTeamsChannelConfiguration#channel_id}. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.configurationName">ConfigurationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#configuration_name ChatbotTeamsChannelConfiguration#configuration_name}. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#iam_role_arn ChatbotTeamsChannelConfiguration#iam_role_arn}. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.teamId">TeamId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#team_id ChatbotTeamsChannelConfiguration#team_id}. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#tenant_id ChatbotTeamsChannelConfiguration#tenant_id}. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.channelName">ChannelName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#channel_name ChatbotTeamsChannelConfiguration#channel_name}. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.guardrailPolicyArns">GuardrailPolicyArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#guardrail_policy_arns ChatbotTeamsChannelConfiguration#guardrail_policy_arns}. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.loggingLevel">LoggingLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#logging_level ChatbotTeamsChannelConfiguration#logging_level}. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.snsTopicArns">SnsTopicArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#sns_topic_arns ChatbotTeamsChannelConfiguration#sns_topic_arns}. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#tags ChatbotTeamsChannelConfiguration#tags}. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.teamName">TeamName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#team_name ChatbotTeamsChannelConfiguration#team_name}. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.userAuthorizationRequired">UserAuthorizationRequired</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#user_authorization_required ChatbotTeamsChannelConfiguration#user_authorization_required}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.channelId"></a>

```go
ChannelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#channel_id ChatbotTeamsChannelConfiguration#channel_id}.

---

##### `ConfigurationName`<sup>Required</sup> <a name="ConfigurationName" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.configurationName"></a>

```go
ConfigurationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#configuration_name ChatbotTeamsChannelConfiguration#configuration_name}.

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.iamRoleArn"></a>

```go
IamRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#iam_role_arn ChatbotTeamsChannelConfiguration#iam_role_arn}.

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.teamId"></a>

```go
TeamId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#team_id ChatbotTeamsChannelConfiguration#team_id}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#tenant_id ChatbotTeamsChannelConfiguration#tenant_id}.

---

##### `ChannelName`<sup>Optional</sup> <a name="ChannelName" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.channelName"></a>

```go
ChannelName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#channel_name ChatbotTeamsChannelConfiguration#channel_name}.

---

##### `GuardrailPolicyArns`<sup>Optional</sup> <a name="GuardrailPolicyArns" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.guardrailPolicyArns"></a>

```go
GuardrailPolicyArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#guardrail_policy_arns ChatbotTeamsChannelConfiguration#guardrail_policy_arns}.

---

##### `LoggingLevel`<sup>Optional</sup> <a name="LoggingLevel" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.loggingLevel"></a>

```go
LoggingLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#logging_level ChatbotTeamsChannelConfiguration#logging_level}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#region ChatbotTeamsChannelConfiguration#region}

---

##### `SnsTopicArns`<sup>Optional</sup> <a name="SnsTopicArns" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.snsTopicArns"></a>

```go
SnsTopicArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#sns_topic_arns ChatbotTeamsChannelConfiguration#sns_topic_arns}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#tags ChatbotTeamsChannelConfiguration#tags}.

---

##### `TeamName`<sup>Optional</sup> <a name="TeamName" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.teamName"></a>

```go
TeamName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#team_name ChatbotTeamsChannelConfiguration#team_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.timeouts"></a>

```go
Timeouts ChatbotTeamsChannelConfigurationTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#timeouts ChatbotTeamsChannelConfiguration#timeouts}

---

##### `UserAuthorizationRequired`<sup>Optional</sup> <a name="UserAuthorizationRequired" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.userAuthorizationRequired"></a>

```go
UserAuthorizationRequired interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#user_authorization_required ChatbotTeamsChannelConfiguration#user_authorization_required}.

---

### ChatbotTeamsChannelConfigurationTimeouts <a name="ChatbotTeamsChannelConfigurationTimeouts" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/chatbotteamschannelconfiguration"

&chatbotteamschannelconfiguration.ChatbotTeamsChannelConfigurationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#create ChatbotTeamsChannelConfiguration#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#delete ChatbotTeamsChannelConfiguration#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chatbot_teams_channel_configuration#update ChatbotTeamsChannelConfiguration#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ChatbotTeamsChannelConfigurationTimeoutsOutputReference <a name="ChatbotTeamsChannelConfigurationTimeoutsOutputReference" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/chatbotteamschannelconfiguration"

chatbotteamschannelconfiguration.NewChatbotTeamsChannelConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChatbotTeamsChannelConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



