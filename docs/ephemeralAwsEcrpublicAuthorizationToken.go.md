# `ephemeralAwsEcrpublicAuthorizationToken` Submodule <a name="`ephemeralAwsEcrpublicAuthorizationToken` Submodule" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsEcrpublicAuthorizationToken <a name="EphemeralAwsEcrpublicAuthorizationToken" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/ecrpublic_authorization_token aws_ecrpublic_authorization_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ephemeralawsecrpublicauthorizationtoken"

ephemeralawsecrpublicauthorizationtoken.NewEphemeralAwsEcrpublicAuthorizationToken(scope Construct, id *string, config EphemeralAwsEcrpublicAuthorizationTokenConfig) EphemeralAwsEcrpublicAuthorizationToken
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig">EphemeralAwsEcrpublicAuthorizationTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig">EphemeralAwsEcrpublicAuthorizationTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ephemeralawsecrpublicauthorizationtoken"

ephemeralawsecrpublicauthorizationtoken.EphemeralAwsEcrpublicAuthorizationToken_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ephemeralawsecrpublicauthorizationtoken"

ephemeralawsecrpublicauthorizationtoken.EphemeralAwsEcrpublicAuthorizationToken_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ephemeralawsecrpublicauthorizationtoken"

ephemeralawsecrpublicauthorizationtoken.EphemeralAwsEcrpublicAuthorizationToken_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.authorizationToken">AuthorizationToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AuthorizationToken`<sup>Required</sup> <a name="AuthorizationToken" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.authorizationToken"></a>

```go
func AuthorizationToken() *string
```

- *Type:* *string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsEcrpublicAuthorizationTokenConfig <a name="EphemeralAwsEcrpublicAuthorizationTokenConfig" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ephemeralawsecrpublicauthorizationtoken"

&ephemeralawsecrpublicauthorizationtoken.EphemeralAwsEcrpublicAuthorizationTokenConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/ecrpublic_authorization_token#region EphemeralAwsEcrpublicAuthorizationToken#region}

---



