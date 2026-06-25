# `serviceDiscoveryPrivateDnsNamespace` Submodule <a name="`serviceDiscoveryPrivateDnsNamespace` Submodule" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceDiscoveryPrivateDnsNamespace <a name="ServiceDiscoveryPrivateDnsNamespace" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace aws_service_discovery_private_dns_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer"></a>

```java
import io.cdktn.providers.aws.service_discovery_private_dns_namespace.ServiceDiscoveryPrivateDnsNamespace;

ServiceDiscoveryPrivateDnsNamespace.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .vpc(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#name ServiceDiscoveryPrivateDnsNamespace#name}. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.vpc">vpc</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#vpc ServiceDiscoveryPrivateDnsNamespace#vpc}. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#description ServiceDiscoveryPrivateDnsNamespace#description}. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#id ServiceDiscoveryPrivateDnsNamespace#id}. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#tags ServiceDiscoveryPrivateDnsNamespace#tags}. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#tags_all ServiceDiscoveryPrivateDnsNamespace#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#name ServiceDiscoveryPrivateDnsNamespace#name}.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.vpc"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#vpc ServiceDiscoveryPrivateDnsNamespace#vpc}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#description ServiceDiscoveryPrivateDnsNamespace#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#id ServiceDiscoveryPrivateDnsNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#region ServiceDiscoveryPrivateDnsNamespace#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#tags ServiceDiscoveryPrivateDnsNamespace#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#tags_all ServiceDiscoveryPrivateDnsNamespace#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServiceDiscoveryPrivateDnsNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isConstruct"></a>

```java
import io.cdktn.providers.aws.service_discovery_private_dns_namespace.ServiceDiscoveryPrivateDnsNamespace;

ServiceDiscoveryPrivateDnsNamespace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.service_discovery_private_dns_namespace.ServiceDiscoveryPrivateDnsNamespace;

ServiceDiscoveryPrivateDnsNamespace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.service_discovery_private_dns_namespace.ServiceDiscoveryPrivateDnsNamespace;

ServiceDiscoveryPrivateDnsNamespace.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.service_discovery_private_dns_namespace.ServiceDiscoveryPrivateDnsNamespace;

ServiceDiscoveryPrivateDnsNamespace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServiceDiscoveryPrivateDnsNamespace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ServiceDiscoveryPrivateDnsNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServiceDiscoveryPrivateDnsNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServiceDiscoveryPrivateDnsNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ServiceDiscoveryPrivateDnsNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.hostedZone">hostedZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.vpcInput">vpcInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.vpc">vpc</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `hostedZone`<sup>Required</sup> <a name="hostedZone" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.hostedZone"></a>

```java
public java.lang.String getHostedZone();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.vpcInput"></a>

```java
public java.lang.String getVpcInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.vpc"></a>

```java
public java.lang.String getVpc();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceDiscoveryPrivateDnsNamespaceConfig <a name="ServiceDiscoveryPrivateDnsNamespaceConfig" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.service_discovery_private_dns_namespace.ServiceDiscoveryPrivateDnsNamespaceConfig;

ServiceDiscoveryPrivateDnsNamespaceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .vpc(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#name ServiceDiscoveryPrivateDnsNamespace#name}. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.vpc">vpc</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#vpc ServiceDiscoveryPrivateDnsNamespace#vpc}. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#description ServiceDiscoveryPrivateDnsNamespace#description}. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#id ServiceDiscoveryPrivateDnsNamespace#id}. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#tags ServiceDiscoveryPrivateDnsNamespace#tags}. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#tags_all ServiceDiscoveryPrivateDnsNamespace#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#name ServiceDiscoveryPrivateDnsNamespace#name}.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.vpc"></a>

```java
public java.lang.String getVpc();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#vpc ServiceDiscoveryPrivateDnsNamespace#vpc}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#description ServiceDiscoveryPrivateDnsNamespace#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#id ServiceDiscoveryPrivateDnsNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#region ServiceDiscoveryPrivateDnsNamespace#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#tags ServiceDiscoveryPrivateDnsNamespace#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/service_discovery_private_dns_namespace#tags_all ServiceDiscoveryPrivateDnsNamespace#tags_all}.

---



