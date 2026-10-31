# `cloudwatchomniOrganizationDomain` Submodule <a name="`cloudwatchomniOrganizationDomain` Submodule" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchomniOrganizationDomain <a name="CloudwatchomniOrganizationDomain" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain aws_cloudwatchomni_organization_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer"></a>

```typescript
import { cloudwatchomniOrganizationDomain } from '@cdktn/provider-aws'

new cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain(scope: Construct, id: string, config: CloudwatchomniOrganizationDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig">CloudwatchomniOrganizationDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig">CloudwatchomniOrganizationDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.putIdentityProviderConfiguration">putIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetIdentityProviderConfiguration">resetIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentityProviderConfiguration` <a name="putIdentityProviderConfiguration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.putIdentityProviderConfiguration"></a>

```typescript
public putIdentityProviderConfiguration(value: IResolvable | CloudwatchomniOrganizationDomainIdentityProviderConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.putIdentityProviderConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfiguration</a>[]

---

##### `resetIdentityProviderConfiguration` <a name="resetIdentityProviderConfiguration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetIdentityProviderConfiguration"></a>

```typescript
public resetIdentityProviderConfiguration(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchomniOrganizationDomain resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isConstruct"></a>

```typescript
import { cloudwatchomniOrganizationDomain } from '@cdktn/provider-aws'

cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isTerraformElement"></a>

```typescript
import { cloudwatchomniOrganizationDomain } from '@cdktn/provider-aws'

cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isTerraformResource"></a>

```typescript
import { cloudwatchomniOrganizationDomain } from '@cdktn/provider-aws'

cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.generateConfigForImport"></a>

```typescript
import { cloudwatchomniOrganizationDomain } from '@cdktn/provider-aws'

cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudwatchomniOrganizationDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchomniOrganizationDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchomniOrganizationDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchomniOrganizationDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.customEndpointUrls">customEndpointUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainEndpointUrl">domainEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityCenterApplicationArn">identityCenterApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProviderConfiguration">identityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList">CloudwatchomniOrganizationDomainIdentityProviderConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.ownerAccountId">ownerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainAccessRoleArnInput">domainAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProviderConfigurationInput">identityProviderConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProvidersInput">identityProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainAccessRoleArn">domainAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProviders">identityProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `customEndpointUrls`<sup>Required</sup> <a name="customEndpointUrls" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.customEndpointUrls"></a>

```typescript
public readonly customEndpointUrls: string[];
```

- *Type:* string[]

---

##### `domainEndpointUrl`<sup>Required</sup> <a name="domainEndpointUrl" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainEndpointUrl"></a>

```typescript
public readonly domainEndpointUrl: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `identityCenterApplicationArn`<sup>Required</sup> <a name="identityCenterApplicationArn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityCenterApplicationArn"></a>

```typescript
public readonly identityCenterApplicationArn: string;
```

- *Type:* string

---

##### `identityProviderConfiguration`<sup>Required</sup> <a name="identityProviderConfiguration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProviderConfiguration"></a>

```typescript
public readonly identityProviderConfiguration: CloudwatchomniOrganizationDomainIdentityProviderConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList">CloudwatchomniOrganizationDomainIdentityProviderConfigurationList</a>

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.ownerAccountId"></a>

```typescript
public readonly ownerAccountId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `domainAccessRoleArnInput`<sup>Optional</sup> <a name="domainAccessRoleArnInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainAccessRoleArnInput"></a>

```typescript
public readonly domainAccessRoleArnInput: string;
```

- *Type:* string

---

##### `identityProviderConfigurationInput`<sup>Optional</sup> <a name="identityProviderConfigurationInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProviderConfigurationInput"></a>

```typescript
public readonly identityProviderConfigurationInput: IResolvable | CloudwatchomniOrganizationDomainIdentityProviderConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfiguration</a>[]

---

##### `identityProvidersInput`<sup>Optional</sup> <a name="identityProvidersInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProvidersInput"></a>

```typescript
public readonly identityProvidersInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `domainAccessRoleArn`<sup>Required</sup> <a name="domainAccessRoleArn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.domainAccessRoleArn"></a>

```typescript
public readonly domainAccessRoleArn: string;
```

- *Type:* string

---

##### `identityProviders`<sup>Required</sup> <a name="identityProviders" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.identityProviders"></a>

```typescript
public readonly identityProviders: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchomniOrganizationDomainConfig <a name="CloudwatchomniOrganizationDomainConfig" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.Initializer"></a>

```typescript
import { cloudwatchomniOrganizationDomain } from '@cdktn/provider-aws'

const cloudwatchomniOrganizationDomainConfig: cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.domainAccessRoleArn">domainAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#domain_access_role_arn CloudwatchomniOrganizationDomain#domain_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.identityProviders">identityProviders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_providers CloudwatchomniOrganizationDomain#identity_providers}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#name CloudwatchomniOrganizationDomain#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.identityProviderConfiguration">identityProviderConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfiguration</a>[]</code> | identity_provider_configuration block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#tags CloudwatchomniOrganizationDomain#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainAccessRoleArn`<sup>Required</sup> <a name="domainAccessRoleArn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.domainAccessRoleArn"></a>

```typescript
public readonly domainAccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#domain_access_role_arn CloudwatchomniOrganizationDomain#domain_access_role_arn}.

---

##### `identityProviders`<sup>Required</sup> <a name="identityProviders" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.identityProviders"></a>

```typescript
public readonly identityProviders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_providers CloudwatchomniOrganizationDomain#identity_providers}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#name CloudwatchomniOrganizationDomain#name}.

---

##### `identityProviderConfiguration`<sup>Optional</sup> <a name="identityProviderConfiguration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.identityProviderConfiguration"></a>

```typescript
public readonly identityProviderConfiguration: IResolvable | CloudwatchomniOrganizationDomainIdentityProviderConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfiguration</a>[]

identity_provider_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_provider_configuration CloudwatchomniOrganizationDomain#identity_provider_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#region CloudwatchomniOrganizationDomain#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#tags CloudwatchomniOrganizationDomain#tags}.

---

### CloudwatchomniOrganizationDomainIdentityProviderConfiguration <a name="CloudwatchomniOrganizationDomainIdentityProviderConfiguration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration.Initializer"></a>

```typescript
import { cloudwatchomniOrganizationDomain } from '@cdktn/provider-aws'

const cloudwatchomniOrganizationDomainIdentityProviderConfiguration: cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration.property.identityCenterConfiguration">identityCenterConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>[]</code> | identity_center_configuration block. |

---

##### `identityCenterConfiguration`<sup>Optional</sup> <a name="identityCenterConfiguration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration.property.identityCenterConfiguration"></a>

```typescript
public readonly identityCenterConfiguration: IResolvable | CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>[]

identity_center_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_center_configuration CloudwatchomniOrganizationDomain#identity_center_configuration}

---

### CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration <a name="CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration.Initializer"></a>

```typescript
import { cloudwatchomniOrganizationDomain } from '@cdktn/provider-aws'

const cloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration: cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration.property.identityCenterInstanceArn">identityCenterInstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_center_instance_arn CloudwatchomniOrganizationDomain#identity_center_instance_arn}. |

---

##### `identityCenterInstanceArn`<sup>Required</sup> <a name="identityCenterInstanceArn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration.property.identityCenterInstanceArn"></a>

```typescript
public readonly identityCenterInstanceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_center_instance_arn CloudwatchomniOrganizationDomain#identity_center_instance_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList <a name="CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer"></a>

```typescript
import { cloudwatchomniOrganizationDomain } from '@cdktn/provider-aws'

new cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.get"></a>

```typescript
public get(index: number): CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>[]

---


### CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference <a name="CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer"></a>

```typescript
import { cloudwatchomniOrganizationDomain } from '@cdktn/provider-aws'

new cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArnInput">identityCenterInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArn">identityCenterInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityCenterInstanceArnInput`<sup>Optional</sup> <a name="identityCenterInstanceArnInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArnInput"></a>

```typescript
public readonly identityCenterInstanceArnInput: string;
```

- *Type:* string

---

##### `identityCenterInstanceArn`<sup>Required</sup> <a name="identityCenterInstanceArn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArn"></a>

```typescript
public readonly identityCenterInstanceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>

---


### CloudwatchomniOrganizationDomainIdentityProviderConfigurationList <a name="CloudwatchomniOrganizationDomainIdentityProviderConfigurationList" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.Initializer"></a>

```typescript
import { cloudwatchomniOrganizationDomain } from '@cdktn/provider-aws'

new cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.get"></a>

```typescript
public get(index: number): CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniOrganizationDomainIdentityProviderConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfiguration</a>[]

---


### CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference <a name="CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer"></a>

```typescript
import { cloudwatchomniOrganizationDomain } from '@cdktn/provider-aws'

new cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.putIdentityCenterConfiguration">putIdentityCenterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.resetIdentityCenterConfiguration">resetIdentityCenterConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdentityCenterConfiguration` <a name="putIdentityCenterConfiguration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.putIdentityCenterConfiguration"></a>

```typescript
public putIdentityCenterConfiguration(value: IResolvable | CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.putIdentityCenterConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>[]

---

##### `resetIdentityCenterConfiguration` <a name="resetIdentityCenterConfiguration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.resetIdentityCenterConfiguration"></a>

```typescript
public resetIdentityCenterConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.identityCenterConfiguration">identityCenterConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.identityCenterConfigurationInput">identityCenterConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityCenterConfiguration`<sup>Required</sup> <a name="identityCenterConfiguration" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.identityCenterConfiguration"></a>

```typescript
public readonly identityCenterConfiguration: CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList</a>

---

##### `identityCenterConfigurationInput`<sup>Optional</sup> <a name="identityCenterConfigurationInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.identityCenterConfigurationInput"></a>

```typescript
public readonly identityCenterConfigurationInput: IResolvable | CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniOrganizationDomainIdentityProviderConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationDomain.CloudwatchomniOrganizationDomainIdentityProviderConfiguration">CloudwatchomniOrganizationDomainIdentityProviderConfiguration</a>

---



