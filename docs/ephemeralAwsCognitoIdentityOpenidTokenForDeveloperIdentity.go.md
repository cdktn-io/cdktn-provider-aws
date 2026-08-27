# `ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity` Submodule <a name="`ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity` Submodule" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity <a name="EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity aws_cognito_identity_openid_token_for_developer_identity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ephemeralawscognitoidentityopenidtokenfordeveloperidentity"

ephemeralawscognitoidentityopenidtokenfordeveloperidentity.NewEphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity(scope Construct, id *string, config EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig) EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig">EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig">EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetIdentityId">ResetIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetPrincipalTags">ResetPrincipalTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetTokenDuration">ResetTokenDuration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetIdentityId` <a name="ResetIdentityId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetIdentityId"></a>

```go
func ResetIdentityId()
```

##### `ResetPrincipalTags` <a name="ResetPrincipalTags" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetPrincipalTags"></a>

```go
func ResetPrincipalTags()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTokenDuration` <a name="ResetTokenDuration" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetTokenDuration"></a>

```go
func ResetTokenDuration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ephemeralawscognitoidentityopenidtokenfordeveloperidentity"

ephemeralawscognitoidentityopenidtokenfordeveloperidentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ephemeralawscognitoidentityopenidtokenfordeveloperidentity"

ephemeralawscognitoidentityopenidtokenfordeveloperidentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ephemeralawscognitoidentityopenidtokenfordeveloperidentity"

ephemeralawscognitoidentityopenidtokenfordeveloperidentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityIdInput">IdentityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityPoolIdInput">IdentityPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.loginsInput">LoginsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.principalTagsInput">PrincipalTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tokenDurationInput">TokenDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityId">IdentityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityPoolId">IdentityPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.logins">Logins</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.principalTags">PrincipalTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tokenDuration">TokenDuration</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `IdentityIdInput`<sup>Optional</sup> <a name="IdentityIdInput" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityIdInput"></a>

```go
func IdentityIdInput() *string
```

- *Type:* *string

---

##### `IdentityPoolIdInput`<sup>Optional</sup> <a name="IdentityPoolIdInput" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityPoolIdInput"></a>

```go
func IdentityPoolIdInput() *string
```

- *Type:* *string

---

##### `LoginsInput`<sup>Optional</sup> <a name="LoginsInput" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.loginsInput"></a>

```go
func LoginsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PrincipalTagsInput`<sup>Optional</sup> <a name="PrincipalTagsInput" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.principalTagsInput"></a>

```go
func PrincipalTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TokenDurationInput`<sup>Optional</sup> <a name="TokenDurationInput" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tokenDurationInput"></a>

```go
func TokenDurationInput() *f64
```

- *Type:* *f64

---

##### `IdentityId`<sup>Required</sup> <a name="IdentityId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityId"></a>

```go
func IdentityId() *string
```

- *Type:* *string

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityPoolId"></a>

```go
func IdentityPoolId() *string
```

- *Type:* *string

---

##### `Logins`<sup>Required</sup> <a name="Logins" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.logins"></a>

```go
func Logins() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PrincipalTags`<sup>Required</sup> <a name="PrincipalTags" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.principalTags"></a>

```go
func PrincipalTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TokenDuration`<sup>Required</sup> <a name="TokenDuration" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tokenDuration"></a>

```go
func TokenDuration() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig <a name="EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ephemeralawscognitoidentityopenidtokenfordeveloperidentity"

&ephemeralawscognitoidentityopenidtokenfordeveloperidentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	IdentityPoolId: *string,
	Logins: *map[string]*string,
	IdentityId: *string,
	PrincipalTags: *map[string]*string,
	Region: *string,
	TokenDuration: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.identityPoolId">IdentityPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#identity_pool_id EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#identity_pool_id}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.logins">Logins</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#logins EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#logins}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.identityId">IdentityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#identity_id EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#identity_id}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.principalTags">PrincipalTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#principal_tags EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#principal_tags}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.tokenDuration">TokenDuration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#token_duration EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#token_duration}. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.identityPoolId"></a>

```go
IdentityPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#identity_pool_id EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#identity_pool_id}.

---

##### `Logins`<sup>Required</sup> <a name="Logins" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.logins"></a>

```go
Logins *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#logins EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#logins}.

---

##### `IdentityId`<sup>Optional</sup> <a name="IdentityId" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.identityId"></a>

```go
IdentityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#identity_id EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#identity_id}.

---

##### `PrincipalTags`<sup>Optional</sup> <a name="PrincipalTags" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.principalTags"></a>

```go
PrincipalTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#principal_tags EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#principal_tags}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#region EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#region}

---

##### `TokenDuration`<sup>Optional</sup> <a name="TokenDuration" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.tokenDuration"></a>

```go
TokenDuration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#token_duration EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#token_duration}.

---



